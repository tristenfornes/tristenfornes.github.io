document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://portiaportia.github.io/json/house-plans.json');
        const data = await response.json();
        const housesContainer = document.getElementById('houses-container');

        data.houses.forEach(house => {
            const houseSection = document.createElement('section');
            houseSection.classList.add('house');

            const image = document.createElement('img');
            image.src = `https://portiaportia.github.io/json/images/house-plans/${house.image}`;
            image.alt = house.name;
            houseSection.appendChild(image);

            const details = document.createElement('div');
            details.classList.add('details');

            const name = document.createElement('h2');
            name.textContent = house.name;
            details.appendChild(name);

            const size = document.createElement('p');
            size.textContent = `Size: ${house.size}`;
            details.appendChild(size);

            const width = document.createElement('p');
            width.textContent = `Width: ${house.width}`;
            details.appendChild(width);

            const bedrooms = document.createElement('p');
            bedrooms.textContent = `Bedrooms: ${house.bedrooms}`;
            details.appendChild(bedrooms);

            const floorPlans = document.createElement('p');
            floorPlans.textContent = `Floor Plans: ${house.floorPlans}`;
            details.appendChild(floorPlans);

            houseSection.appendChild(details);
            housesContainer.appendChild(houseSection);
        });
    } catch (error) {
        console.error('Error fetching and parsing JSON:', error);
    }
});
