document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Replace with the actual URL where your JSON file is hosted on GitHub
    const jsonUrl = "https://tristenfornes.github.io/json/games.json";
    
    fetch(jsonUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then(games => {
        const container = document.getElementById("fixtures-container");
        container.innerHTML = ""; // Clear any existing content
  
        games.forEach(game => {
          // Create a container for each game item
          const gameItem = document.createElement("div");
          gameItem.classList.add("game-item");
  
          // Create a clickable image link using your provided snippet
          const img = document.createElement("img");
          const imglink = document.createElement("a");
          // Use game.reference if it exists; otherwise, default to game details page
          imglink.href = game.reference ? game.reference : `game.html?gameId=${game._id}`;
          imglink.target = "_blank"; 
          // Set image source (adjust the path if needed)
          img.src = `json/images/${game.img_name}`;
          // Use a descriptive alt text (using teams for this example)
          img.alt = `${game.teamA} vs ${game.teamB}`;
          img.style.cursor = "pointer";
          imglink.appendChild(img);
          gameItem.appendChild(imglink);
  
          // Create a container for text details (title and date)
          const textContainer = document.createElement("div");
          textContainer.classList.add("game-text");
  
          const title = document.createElement("h3");
          title.textContent = `${game.teamA} vs ${game.teamB}`;
          textContainer.appendChild(title);
  
          const datePara = document.createElement("p");
          datePara.textContent = game.date;
          textContainer.appendChild(datePara);
  
          gameItem.appendChild(textContainer);
          container.appendChild(gameItem);
        });
      })
      .catch(error => {
        console.error("Error fetching fixtures:", error);
      });
  });
  
  
  