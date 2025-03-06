document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    // Replace with the actual URL of your JSON file on GitHub
    const jsonUrl = "https://tristenfornes.github.io/json/games.json";
  
    // Helper function to extract a query parameter by name from the URL
    function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  
    // Helper function to format keys (e.g., "yellow_cards" becomes "Yellow Cards")
    function formatKey(key) {
      return key
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  
    // Get the gameId from the URL query parameter
    const gameId = getParameterByName('gameId');
    if (!gameId) {
      console.error("No gameId provided in the URL.");
      return;
    }
  
    // Fetch the JSON file containing game data
    fetch(jsonUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then(games => {
        // Use .find() to select only the game with the matching _id
        const game = games.find(g => g._id == gameId);
        if (!game) {
          console.error("Game not found.");
          return;
        }
        
        // Get the container where the game details will be displayed
        const container = document.querySelector('.game-details');
        container.innerHTML = ""; // Clear any existing content
  
        // Create a container for the selected game
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-item');
  
        // Display the game image
        const img = document.createElement('img');
        img.src = game.img_name;
        img.alt = `${game.teamA} vs. ${game.teamB}`;
        gameDiv.appendChild(img);
  
        // Create a title for the game (teams and date)
        const title = document.createElement('h2');
        title.textContent = `${game.teamA} vs. ${game.teamB} - ${game.date}`;
        gameDiv.appendChild(title);
  
        // Game Summary Section
        const summarySection = document.createElement('section');
        summarySection.classList.add('game-summary');
        const summaryHeading = document.createElement('h3');
        summaryHeading.textContent = "Game Summary";
        summarySection.appendChild(summaryHeading);
        const summaryPara = document.createElement('p');
        summaryPara.textContent = game.game_summary;
        summarySection.appendChild(summaryPara);
        gameDiv.appendChild(summarySection);
  
        // Play-by-Play Section
        const playSection = document.createElement('section');
        playSection.classList.add('play-by-play');
        const playHeading = document.createElement('h3');
        playHeading.textContent = "Play-by-Play";
        playSection.appendChild(playHeading);
        const playPara = document.createElement('p');
        playPara.textContent = game.play_by_play;
        playSection.appendChild(playPara);
        gameDiv.appendChild(playSection);
  
        // Match Stats Section
        const statsSection = document.createElement('section');
        statsSection.classList.add('match-stats');
        const statsHeading = document.createElement('h3');
        statsHeading.textContent = "Match Stats";
        statsSection.appendChild(statsHeading);
        const statsList = document.createElement('ul');
        for (let stat in game.match_stats) {
          const statItem = document.createElement('li');
          statItem.textContent = `${formatKey(stat)}: ${game.match_stats[stat]}`;
          statsList.appendChild(statItem);
        }
        statsSection.appendChild(statsList);
        gameDiv.appendChild(statsSection);
  
        // Append the complete gameDiv to the main container
        container.appendChild(gameDiv);
      })
      .catch(error => {
        console.error("Error fetching game details:", error);
      });
  });
  