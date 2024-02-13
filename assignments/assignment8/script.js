function toggleMenu() {
    var menuBar = document.querySelector('.menu-bar');
    var toggleMenu = document.querySelector('.toggle-menu');

    if (menuBar.style.display === 'none') {
        menuBar.style.display = 'block';
        toggleMenu.textContent = 'Toggle Menu &#8593;';
    } else {
        menuBar.style.display = 'none';
        toggleMenu.textContent = 'Toggle Menu &#8595;';
    }
}

function changeImage(event) {
    var command = event.key.toUpperCase();
    var yogaSlider = document.querySelector('.yoga-slider');

    if (command >= 'A' && command <= 'H') {
        var imageIndex = command.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        yogaSlider.innerHTML = '<img src="https://picsum.photos/200/300?random=' + imageIndex + '" alt="Yoga Image">';
    }
}
