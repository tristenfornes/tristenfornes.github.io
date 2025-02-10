const helloColumn = document.getElementById('hello-column');
const helloContent = document.querySelector('#hello-column .hello-content');
const colorPicker = document.getElementById('color-picker');
const star = document.querySelector('.star');
const clickableImage = document.getElementById('clickable-image');

// Define an array of images
const images = [
  'https://picsum.photos/id/10/200/200',
  'https://picsum.photos/id/16/200/200'
];
let currentImageIndex = 0;

// When the hello column is clicked, append the word "hello" on a new line
helloColumn.addEventListener('click', () => {
  const helloLine = document.createElement('div');
  helloLine.textContent = 'hello';
  helloContent.appendChild(helloLine);
});

// When a new color is selected, update the star's color
colorPicker.addEventListener('input', (event) => {
  const newColor = event.target.value;
  star.style.color = newColor;
});

// Preload images so that the image change feels seamless
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// When the image is clicked, switch to the next image with a fade effect
clickableImage.addEventListener('click', () => {
  clickableImage.style.opacity = 0;
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    clickableImage.src = images[currentImageIndex];
    clickableImage.style.opacity = 1;
  }, 500);
});
