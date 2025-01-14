// Fetch JSON data
async function fetchHousePlans() {
    try {
        const response = await fetch('https://portiaportia.github.io/json/house-plans.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching house plans:', error);
    }
}

// Display house plans
async function displayHousePlans() {
    const housePlansContainer = document.getElementById('house-plans');
    const housePlans = await fetchHousePlans();

    housePlans.forEach(house => {
        const houseDiv = document.createElement('div');
        houseDiv.classList.add('house');

        const mainImage = document.createElement('img');
        mainImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
        mainImage.alt = house.name;
        houseDiv.appendChild(mainImage);

        const houseInfo = document.createElement('div');
        houseInfo.classList.add('house-info');

        const title = document.createElement('h2');
        title.textContent = house.name;
        houseInfo.appendChild(title);

        const size = document.createElement('p');
        size.textContent = `Size: ${house.size} sqft`;
        houseInfo.appendChild(size);

        const bedrooms = document.createElement('p');
        bedrooms.textContent = `Bedrooms: ${house.bedrooms}`;
        houseInfo.appendChild(bedrooms);

        const bathrooms = document.createElement('p');
        bathrooms.textContent = `Bathrooms: ${house.bathrooms}`;
        houseInfo.appendChild(bathrooms);

        const features = document.createElement('p');
        features.textContent = `Features: ${house.features.join(', ')}`;
        houseInfo.appendChild(features);

        house.floor_plans.forEach(floorPlan => {
            const floorPlanImage = document.createElement('img');
            floorPlanImage.src = `https://portiaportia.github.io/json/images/house-plans/${floorPlan.image}`;
            floorPlanImage.alt = `${house.name} - ${floorPlan.name}`;
            houseInfo.appendChild(floorPlanImage);

            const floorPlanName = document.createElement('p');
            floorPlanName.textContent = floorPlan.name;
            houseInfo.appendChild(floorPlanName);
        });

        houseDiv.appendChild(houseInfo);
        housePlansContainer.appendChild(houseDiv);
    });
}

displayHousePlans();
