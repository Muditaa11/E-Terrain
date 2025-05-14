document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([28.6139, 77.2090], 5); // Default to India

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Add Polygon Drawing Tool
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
        edit: { featureGroup: drawnItems },
        draw: { polygon: true, marker: true }
    });
    map.addControl(drawControl);

    map.on("draw:created", (e) => {
        drawnItems.addLayer(e.layer);
        console.log("Coordinates:", e.layer.getLatLngs()); // Store polygon coordinates
    });
});