document.addEventListener("DOMContentLoaded", function() {
    // Replace the URL below with the actual URL where your JSON file is hosted on GitHub
    const jsonUrl = "https://tristenfornes.github.io/json/games.json";
  
    fetch(jsonUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then(games => {
        const container = document.querySelector('.game-details');
        container.innerHTML = ""; // Clear any existing content
  
        games.forEach(game => {
          // Create a container for each game item
          const gameDiv = document.createElement('div');
          gameDiv.classList.add('game-item');
  
          // Optionally add the image for the game
          const img = document.createElement('img');
          img.src = game.img_name;
          img.alt = `${game.teamA} vs. ${game.teamB}`;
          gameDiv.appendChild(img);
  
          // Create a heading for the game (teams and date)
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
          // Loop through each key in the match_stats object and create a list item
          for (let stat in game.match_stats) {
            const statItem = document.createElement('li');
            statItem.textContent = `${stat}: ${game.match_stats[stat]}`;
            statsList.appendChild(statItem);
          }
          statsSection.appendChild(statsList);
          gameDiv.appendChild(statsSection);
  
          // Append the complete gameDiv to the main container
          container.appendChild(gameDiv);
        });
      })
      .catch(error => {
        console.error("Error fetching the game details:", error);
      });
  });
  