// Initialize the map
var map = L.map('map').setView([28.644800, 77.216721], 13);

// Add tile layer (Google Maps or OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Function to load land parcel data
async function loadLandParcels() {
    try {
        const response = await fetch('/api/land');
        const data = await response.json();

        data.forEach(parcel => {
            L.polygon(parcel.coordinates, {
                color: 'green',
                fillColor: '#228B22',
                fillOpacity: 0.5
            }).addTo(map)
            .bindPopup(`<b>Owner:</b> ${parcel.owner}<br><b>Crop:</b> ${parcel.cropType}`);
        });

    } catch (error) {
        console.error("❌ Error fetching land data:", error);
    }
}

// Load data
loadLandParcels();