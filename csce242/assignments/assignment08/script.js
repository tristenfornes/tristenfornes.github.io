// Array of titles and image filenames
const items = [
    { title: "Happy Birthday", img: "images/birthday.jpg" },
    { title: "Crazy Clown", img: "images/clown.jpg" },
    { title: "It's Raining",  img: "images/rain.jpg" },
    { title: "Quiet Time",    img: "images/read.jpg" },
    { title: "Working Hard",  img: "images/shovel.jpg" },
    { title: "Work From Home",img: "images/work.jpg" }
  ];
  
  // When the page loads, display the list of titles
  document.addEventListener("DOMContentLoaded", () => {
    const titlesContainer = document.getElementById("titles");
  
    items.forEach(item => {
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("title-item");
      titleDiv.textContent = item.title;
  
      // On click, open the popup
      titleDiv.addEventListener("click", () => showPopup(item));
      titlesContainer.appendChild(titleDiv);
    });
  });
  
  // Show the popup with the title and image
  function showPopup(item) {
    document.getElementById("popupTitle").textContent = item.title;
    document.getElementById("popupImage").src = item.img;
    document.getElementById("popupContainer").classList.remove("hidden");
  }
  
  // Close the popup
  document.getElementById("close").addEventListener("click", closePopup);
  document.getElementById("overlay").addEventListener("click", closePopup);
  
  function closePopup() {
    document.getElementById("popupContainer").classList.add("hidden");
  }
  