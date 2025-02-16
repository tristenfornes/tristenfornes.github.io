document.addEventListener("DOMContentLoaded", function () {
    // Navigation Toggle for Small Screens
    const navToggle = document.querySelector(".nav-toggle");
    const navItems = document.querySelector(".nav-items");
  
    navToggle.addEventListener("click", function () {
      navItems.classList.toggle("show");
      // Toggle arrow direction
      navToggle.textContent = navItems.classList.contains("show") ? "▲" : "▼";
    });
  
    // Switch between Exercises
    const exercise1Link = document.getElementById("exercise1Link");
    const exercise2Link = document.getElementById("exercise2Link");
    const travelingSection = document.getElementById("travelingSection");
    const heartSection = document.getElementById("heartSection");
  
    exercise1Link.addEventListener("click", function (e) {
      e.preventDefault();
      travelingSection.classList.remove("hidden");
      heartSection.classList.add("hidden");
      // Close nav on mobile after selection
      if (navItems.classList.contains("show")) {
        navItems.classList.remove("show");
        navToggle.textContent = "▼";
      }
    });
  
    exercise2Link.addEventListener("click", function (e) {
      e.preventDefault();
      heartSection.classList.remove("hidden");
      travelingSection.classList.add("hidden");
      if (navItems.classList.contains("show")) {
        navItems.classList.remove("show");
        navToggle.textContent = "▼";
      }
    });
  
    // Exercise 1: Transportation Image Chooser
    const transportInput = document.getElementById("transportInput");
    const transportImageBox = document.getElementById("transportImageBox");
  
    transportInput.addEventListener("input", function () {
      const value = transportInput.value.trim().toLowerCase();
      let imgSrc = "";
  
      // Check for valid transportation modes
      if (value === "bike") {
        imgSrc = "images/bike.png";
      } else if (value === "scooter") {
        imgSrc = "images/scooter2.png";
      } else if (value === "car") {
        imgSrc = "images/car.png";
      } else if (value === "skateboard") {
        imgSrc = "images/skateboard2.jpeg";
      }
  
      // Display image if valid, otherwise clear
      if (imgSrc !== "") {
        transportImageBox.innerHTML = `<img src="${imgSrc}" alt="${value}">`;
      } else {
        transportImageBox.innerHTML = "";
      }
    });
  
    // Exercise 2: Color My Heart (one function for all buttons)
    const colorButtons = document.querySelectorAll("button[data-color]");
    colorButtons.forEach(function (button) {
      button.addEventListener("click", changeHeartColor);
    });
  });
  
  // Single function to change the heart color
  function changeHeartColor(e) {
    const color = e.target.getAttribute("data-color");
    document.getElementById("heart").style.color = color;
  }
  