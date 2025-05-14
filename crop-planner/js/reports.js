document.addEventListener("DOMContentLoaded", function () {
    let ctx = document.getElementById("chart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Wheat", "Rice", "Corn"],
            datasets: [{
                label: "Crop Yield (tons)",
                data: [10, 15, 7],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"]
            }]
        }
    });
});