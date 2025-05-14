// Initialize the map and set its view to a location
var map = L.map('map').setView([28.7041, 77.1025], 6); // Delhi, India

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Adding a marker for a farm
var farmMarker = L.marker([28.7041, 77.1025]).addTo(map)
    .bindPopup("<b>Farm 1</b><br>🌡 Temperature: 28°C<br>💧 Soil Moisture: 45%")
    .openPopup();

map.on('click', function (e) {
    var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
        .bindPopup("New Farm Location<br>Lat: " + e.latlng.lat + "<br>Lng: " + e.latlng.lng)
        .openPopup();
});