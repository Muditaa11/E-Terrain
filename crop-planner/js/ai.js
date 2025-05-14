// ai.js - AI-driven crop recommendation system (Fully Fixed Version)

const cropAI = {
    cropData: [
        { name: "Wheat", soil: ["Loamy", "Clayey"], temp: [10, 25], rainfall: [30, 100], season: "Winter", pH: [6, 7.5], water: 30, marketPrice: 1.2 },
        { name: "Rice", soil: ["Clayey", "Silty"], temp: [20, 35], rainfall: [100, 250], season: "Summer", pH: [5, 6.5], water: 100, marketPrice: 1.5 },
        { name: "Maize", soil: ["Sandy", "Loamy"], temp: [15, 30], rainfall: [50, 150], season: "Spring", pH: [5.5, 7.5], water: 40, marketPrice: 1.1 },
        { name: "Soybean", soil: ["Loamy", "Sandy"], temp: [18, 32], rainfall: [40, 100], season: "Monsoon", pH: [6, 7], water: 35, marketPrice: 1.3 },
        { name: "Cotton", soil: ["Sandy", "Loamy"], temp: [25, 40], rainfall: [30, 80], season: "Summer", pH: [5, 6.5], water: 25, marketPrice: 1.8 },
        { name: "Sugarcane", soil: ["Loamy", "Clayey"], temp: [20, 40], rainfall: [100, 300], season: "Year-round", pH: [6, 7.5], water: 150, marketPrice: 2.0 },
    ],

    getBestCrops(soilType, temp, rainfall, season, pH, humidity, uvIndex) {
        let matchingCrops = this.cropData.filter(crop =>
            crop.soil.includes(soilType) &&
            temp >= crop.temp[0] && temp <= crop.temp[1] &&
            rainfall >= crop.rainfall[0] && rainfall <= crop.rainfall[1] &&
            pH >= crop.pH[0] && pH <= crop.pH[1] &&
            (season === "Any" || crop.season === season)
        );

        if (matchingCrops.length === 0) {
            return ["⚠ No perfect match. Try adjusting conditions or check alternative crops!"];
        }

        matchingCrops.forEach(crop => {
            crop.risk = this.calculateRisk(crop, temp, humidity, uvIndex);
            crop.profitScore = this.calculateProfitability(crop.marketPrice, crop.risk);
        });

        matchingCrops.sort((a, b) => b.profitScore - a.profitScore);

        return matchingCrops.map(crop => `${crop.name} (💰 Profit Score: ${crop.profitScore}/10, 🚨 Risk: ${crop.risk})`);
    },

    calculateRisk(crop, temp, humidity, uvIndex) {
        let risk = 0;

        if (temp < crop.temp[0] || temp > crop.temp[1]) risk += 2;
        if (humidity > 80) risk += 1;
        if (uvIndex > 9) risk += 1;

        return risk > 5 ? "High 🚨" : risk > 2 ? "Moderate ⚠" : "Low ✅";
    },

    calculateProfitability(marketPrice, risk) {
        let baseScore = marketPrice * 5;
        let riskPenalty = risk === "High 🚨" ? -3 : risk === "Moderate ⚠" ? -1 : 0;
        return Math.max(1, Math.min(10, baseScore + riskPenalty));
    }
};

// ** Fixed AI Function (No More Infinite Loading) **
async function getAIRecommendation(soilType, location, pH) {
    try {
        // Start Loading Animation
        updateLoadingState(true);

        console.log("🔄 Fetching weather data...");

        // Fetch weather data with timeout (5 seconds)
        const weatherData = await fetchWithTimeout(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}, 5000`);

        if (!weatherData) {
            throw new Error("Weather API failed ❌");
        }

        let temp = weatherData.current?.temp_c || 25;
        let rainfall = weatherData.current?.precip_mm || 50;
        let humidity = weatherData.current?.humidity || 60;
        let uvIndex = weatherData.current?.uv || 5;
        let season = determineSeason(weatherData.location?.localtime);

        console.log(`📊 AI Analysis: Temp: ${temp}°C, Rainfall: ${rainfall}mm, Humidity: ${humidity}%, UV: ${uvIndex}, Season: ${season}`);

        let bestCrops = cropAI.getBestCrops(soilType, temp, rainfall, season, pH, humidity, uvIndex);

        // Stop Loading Animation
        updateLoadingState(false);

        return bestCrops;
    } catch (error) {
        console.error("❌ Error fetching AI data:", error);
        
        // Stop Loading Animation even on failure
        updateLoadingState(false);
        
        return ["⚠ Error fetching data. Check API key & location."];
    }
}

// ** Timeout Function for API Calls (Fixes Infinite Loading) **
async function fetchWithTimeout(url, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response.ok ? await response.json() : null;
    } catch (error) {
        return null;
    }
}

// ** Determine Season Based on Month **
function determineSeason(localTime) {
    if (!localTime) return "Any";
    const month = new Date(localTime).getMonth() + 1;
    if ([12, 1, 2].includes(month)) return "Winter";
    if ([3, 4, 5].includes(month)) return "Spring";
    if ([6, 7, 8].includes(month)) return "Summer";
    if ([9, 10, 11].includes(month)) return "Monsoon";
    return "Any";
}

// ** UI Update for Loading State (Fixed) **
function updateLoadingState(isLoading) {
    const loadingElement = document.getElementById("loadingText");
    if (loadingElement) {
        loadingElement.innerText = isLoading ? "🔄 AI is analyzing..." : "";
        loadingElement.style.display = isLoading ? "block" : "none";
    }
}

// ** Export Function for UI **
export { getAIRecommendation };