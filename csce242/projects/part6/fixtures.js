document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const jsonUrl = "https://tristenfornes.github.io/csce242/projects/part6/games.json";
    
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
          const section = document.createElement("section");
          section.classList.add("game-item");
          container.appendChild(section);
  
          const imglink = document.createElement("a");
          imglink.href = game.reference ? game.reference : `game.html?gameId=${game._id}`;
          const img = document.createElement("img");
          img.src = `images/${game.img_name}`;
          img.alt = `${game.teamA} vs ${game.teamB}`;
          img.style.cursor = "pointer";
          imglink.appendChild(img);
          section.appendChild(imglink);
  
          // Create a container for text details
          const ul = document.createElement("ul");
          ul.style.listStyleType = "none";
          const details = [
            `Teams: ${game.teamA} vs ${game.teamB}`,
            `Date: ${game.date}`,
            `Score: ${game.score}`,
            `Location: ${game.location}`
          ];
          details.forEach(detail => {
            const li = document.createElement("li");
            li.textContent = detail;
            li.style.marginBottom = "10px";
            ul.appendChild(li);
          });
          section.appendChild(ul);

          const link = document.createElement("a");
          link.href = `game.html?gameId=${game._id}`;
          link.innerText = "View Details";
          section.appendChild(link);
        });
      })
      .catch(error => {
        console.error("Error fetching fixtures:", error);
      });
  });
  
