// Exercise 1: Bounce Ball
let intervalId;
let ballPosition = 0;
let direction = 1; 
let bouncing = false; 

function startStopBouncing(event) {
    event.preventDefault();
    const link = event.target;

    if (!bouncing) { 
        link.textContent = 'Stop';
        intervalId = setInterval(moveBall, 20); 
        bouncing = true; 
    } else {
        link.textContent = 'Start';
        clearInterval(intervalId);
        bouncing = false; 
    }
}

function moveBall() {
    const container = document.querySelector('.container');
    const containerHeight = container.clientHeight;
    const ball = document.querySelector('.ball');
    const ballHeight = ball.clientHeight;

    ballPosition += direction;
    if (ballPosition >= containerHeight - ballHeight || ballPosition <= 0) {
        direction *= -1;
    }
    ball.style.top = ballPosition + 'px';
}



// Exercise 2: Yoga Moves
var yogaImages = document.querySelector('.yoga-images');
var description = document.querySelector('.description');
var images = ['yoga1.jpg', 'yoga2.jpg', 'yoga3.jpg', 'yoga4.jpg', 'yoga5.jpg', 'yoga6.jpg', 'yoga7.jpg', 'yoga8.jpg'];

for (var i = 0; i < images.length; i++) {
    var image = document.createElement('img');
    image.src = 'images/' + images[i];
    image.alt = 'Yoga Move ' + (i + 1);
    image.setAttribute('onclick', 'showDescription(this)');
    yogaImages.appendChild(image);
}

function showDescription(image) {
    var imageName = image.alt;
    description.textContent = 'Description for ' + imageName + ' goes here.';
}
