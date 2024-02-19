// Exercise 1: Bounce Ball
var bouncing = false;

function startStopBouncing(event) {
    event.preventDefault();
    var link = event.target;
    var container = document.querySelector('.container');
    var ball = document.querySelector('.ball');

    if (!bouncing) {
        link.textContent = 'Stop';
        bouncing = true;
        var interval = setInterval(function() {
            var topPosition = parseInt(getComputedStyle(ball).top);
            var containerHeight = parseInt(getComputedStyle(container).height);
            var ballHeight = parseInt(getComputedStyle(ball).height);

            if (topPosition + ballHeight >= containerHeight) {
                ball.style.top = containerHeight - ballHeight + 'px';
                ball.style.transition = 'top 0s';
                setTimeout(function() {
                    ball.style.transition = 'top 1s';
                }, 100);
            } else if (topPosition <= 0) {
                ball.style.top = '0';
            } else {
                ball.style.top = topPosition + 10 + 'px';
            }
        }, 100);
        ball.interval = interval;
    } else {
        link.textContent = 'Start';
        bouncing = false;
        clearInterval(ball.interval);
    }
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
