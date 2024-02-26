// Assignment 10 - Part 1: Advertisement Banner

const adsAndImages = [
    { ad: "Ad 1: This is the first advertisement.", image: "garden.jpg", attribution: "Image by vecstock on Freepik" },
    { ad: "Ad 2: This is the second advertisement.", image: "golden.jpg", attribution: "Image by wirestock on Freepik" },
    { ad: "Ad 3: This is the third advertisement.", image: "mountain-lake.jpg", attribution: "Image by wirestock on Freepik" },
    { ad: "Ad 4: This is the fourth advertisement.", image: "snow.jpg", attribution: "Image by wirestock on Freepik" },
    { ad: "Ad 5: This is the fifth advertisement.", image: "garden.jpg", attribution: "Image by vecstock on Freepik" } // Loop back to the first image
];

let adIndex = 0;

function changeAdvertisement() {
    const advertisement = document.getElementById('advertisement');
    const adAndImage = adsAndImages[adIndex];
    advertisement.textContent = adAndImage.ad;

    const imageContainer = document.getElementById('image-container');
    const image = `images/${adAndImage.image}`;
    imageContainer.style.backgroundImage = `url(${image})`;

    const attribution = document.getElementById('attribution');
    attribution.textContent = adAndImage.attribution;

    adIndex = (adIndex + 1) % adsAndImages.length;
}

setInterval(changeAdvertisement, 2000);


// Assignment 10 - Part 2: Images and Attributions

const imageContainer = document.getElementById('image-container-part2');

for (const item of adsAndImages) {
    const image = document.createElement('img');
    image.src = `images/${item.image}`;
    image.alt = item.ad;

    const attribution = document.createElement('p');
    attribution.textContent = item.attribution;

    imageContainer.appendChild(image);
    imageContainer.appendChild(attribution);
}
