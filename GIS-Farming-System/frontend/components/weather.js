async function getWeather(lat, lon) {
    const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
    const data = await response.json();
    console.log("Weather Data:", data);
}