document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("rentalForm");
    const listingsContainer = document.getElementById("listings");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const title = document.getElementById("title").value;
            const price = document.getElementById("price").value;
            const category = document.getElementById("category").value;
            const description = document.getElementById("description").value;
            const imageInput = document.getElementById("image").files[0];

            if (!title || !price || !category || !description || !imageInput) return;

            const reader = new FileReader();
            reader.onload = function (event) {
                const imageUrl = event.target.result;
                const listing = { title, price, category, description, imageUrl };

                let listings = JSON.parse(localStorage.getItem("listings")) || [];
                listings.push(listing);
                localStorage.setItem("listings", JSON.stringify(listings));

                form.reset();
                alert("Listing added successfully!");
            };
            reader.readAsDataURL(imageInput);
        });
    }

    if (listingsContainer) {
        let listings = JSON.parse(localStorage.getItem("listings")) || [];
        listingsContainer.innerHTML = "";
        
        listings.forEach((listing, index) => {
            const listingElement = document.createElement("div");
            listingElement.classList.add("listing");
            listingElement.innerHTML = `
                <img src="${listing.imageUrl}" alt="${listing.title}">
                <h3>${listing.title}</h3>
                <p>Category: ${listing.category}</p>
                <p>Price: ₹${listing.price} per day</p>
                <p>${listing.description}</p>
                <button onclick="deleteListing(${index})">Delete</button>
                <button onclick="deleteListing(${index})">Apply</button>

            `;
            listingsContainer.appendChild(listingElement);
        });
    }
});

function deleteListing(index) {
    let listings = JSON.parse(localStorage.getItem("listings")) || [];
    listings.splice(index, 1);
    localStorage.setItem("listings", JSON.stringify(listings));
    location.reload();
}
