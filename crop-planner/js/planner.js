document.getElementById("plan-btn").addEventListener("click", async function () {
    document.getElementById("weather-info").innerHTML = "🌦 Fetching weather data...";
    document.getElementById("crop-recommendation").innerHTML = "💡 AI is analyzing...";

    await getAdvancedRecommendation();
});