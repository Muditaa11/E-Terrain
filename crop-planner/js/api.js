async function getWeatherData() {
    const apiKey = "YOUR_WEATHERAPI_KEY"; // 🌦 Replace with your API key
    const city = "Delhi"; // Change to dynamic input if needed

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) throw new Error(`Weather API Error: ${response.status}`);
        const data = await response.json();
        return { temperature: data.current.temp_c, rainfall: data.current.precip_mm };
    } catch (error) {
        console.error("Weather API Error:", error);
        return { temperature: 25, rainfall: 50 }; // Fallback values
    }
}

async function getSoilData() {
    const apiKey = "YOUR_SOILAPI_KEY"; // 🌱 Replace with your API key
    const location = "Delhi";

    try {
        const response = await fetch(`https://api.soilapi.com/v1/data?key=${apiKey}&location=${location}`);
        if (!response.ok) throw new Error(`Soil API Error: ${response.status}`);
        const data = await response.json();
        return { moisture: data.soil_moisture, ph: data.soil_ph };
    } catch (error) {
        console.error("Soil API Error:", error);
        return { moisture: 30, ph: 6.5 }; // Fallback values
    }
}