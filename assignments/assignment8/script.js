// Function to toggle menu visibility
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

// Function to show/hide exercises
function showExercise(exercise) {
    var exercise1 = document.getElementById('exercise1');
    var exercise2 = document.getElementById('exercise2');

    if (exercise === 'exercise1') {
        exercise1.style.display = 'block';
        exercise2.style.display = 'none';
    } else if (exercise === 'exercise2') {
        exercise1.style.display = 'none';
        exercise2.style.display = 'block';
    }
}

// Function to change image based on command
function checkCommand(event) {
    var commandInput = document.getElementById('command-input');
    var inputValue = event.key.toUpperCase();
    var yogaImage = document.getElementById('yoga-image');

    // List of valid commands
    var validCommands = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    // Check if the entered command is valid
    if (validCommands.includes(inputValue)) {
        // Change image based on command
        yogaImage.src = 'https://www.freepik.com/free-vector/hand-drawn-stickman-collection_20832062.htm#query=stick%20figure%20run&position=46&from_view=search&track=ais&uuid=22e87991-ee06-4dc2-8ea3-464d535e1a63' + inputValue + '.png';
    }
}

// Function to change yoga image based on slider value
function changeYogaImage(value) {
    var yogaImage = document.getElementById('yoga-image');
    yogaImage.src = 'https://www.freepik.com/free-vector/hand-drawn-stickman-collection_20832062.htm#query=stick%20figure%20run&position=46&from_view=search&track=ais&uuid=22e87991-ee06-4dc2-8ea3-464d535e1a63' + value + '.png';
}
