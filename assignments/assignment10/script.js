// Part 1 - Advertisement Banner
const advertisements = ['Ad 1', 'Ad 2', 'Ad 3', 'Ad 4', 'Ad 5'];
let currentAdIndex = 0;
const advertisementElement = document.getElementById('advertisement');

function displayAdvertisement() {
    advertisementElement.textContent = advertisements[currentAdIndex];
    currentAdIndex = (currentAdIndex + 1) % advertisements.length;
}

setInterval(displayAdvertisement, 2000);

// Part 2 - Images and Attributions
const imagesAndAttributions = {
    'garden.jpg': 'Image by vecstock on Freepik',
    'golden.jpg': 'Image by wirestock on Freepik',
    'mountain-lake.jpg': 'Image by wirestock on Freepik',
    'snow.jpg': 'Image by wirestock on Freepik'
};

const imagesContainer = document.getElementById('images-container');

for (const [image, attribution] of Object.entries(imagesAndAttributions)) {
    const imageElement = document.createElement('img');
    imageElement.src = `images/${image}`; 

    const attributionElement = document.createElement('p');
    attributionElement.textContent = attribution;

    imagesContainer.appendChild(imageElement);
    imagesContainer.appendChild(attributionElement);
}

