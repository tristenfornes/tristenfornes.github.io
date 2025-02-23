const drawStairsBtn = document.getElementById('draw-stairs-btn');
const climbStairsBtn = document.getElementById('climb-stairs-btn');
const stairContainer = document.getElementById('stair-container');

let ladderDrawn = false;
let stickPerson = null;
let currentStep = 0;
let intervalId = null;

// Ladder configuration
const numRungs = 10;
const leftRailOffset = 150; // left position of the left rail
const railWidth = 10;
const rightRailOffset = 350; // left position of the right rail

// Calculate rung properties
const rungLeft = leftRailOffset + railWidth; // rungs start after the left rail
const rungWidth = rightRailOffset - rungLeft; // width of each rung

// Calculate dynamic spacing so rungs span evenly from bottom to top of container
const containerHeight = stairContainer.offsetHeight;
const rungSpacing = containerHeight / (numRungs - 1);

// Calculate base left position for the stick person (centered on the bottom rung)
const stickPersonWidth = 40;
const baseLeft = rungLeft + (rungWidth / 2) - (stickPersonWidth / 2);

drawStairsBtn.addEventListener('click', () => drawLadder());
climbStairsBtn.addEventListener('click', () => climbLadder());

const drawLadder = () => {
  if (ladderDrawn) return; // Prevent drawing multiple times
  
  // Draw left rail
  const leftRail = document.createElement('div');
  leftRail.className = 'rail';
  leftRail.style.left = leftRailOffset + 'px';
  leftRail.style.bottom = '0px';
  stairContainer.appendChild(leftRail);
  
  // Draw right rail
  const rightRail = document.createElement('div');
  rightRail.className = 'rail';
  rightRail.style.left = rightRailOffset + 'px';
  rightRail.style.bottom = '0px';
  stairContainer.appendChild(rightRail);
  
  // Create ladder rungs using a for loop, evenly spaced from bottom to top
  for (let i = 0; i < numRungs; i++) {
    const rung = document.createElement('div');
    rung.className = 'rung';
    rung.style.left = rungLeft + 'px';
    rung.style.bottom = (i * rungSpacing) + 'px';
    rung.style.width = rungWidth + 'px';
    stairContainer.appendChild(rung);
  }
  
  // Reveal the "Climb Stairs" button
  climbStairsBtn.style.display = 'inline-block';
  
  // Create the stick person image and position it at the bottom
  stickPerson = document.createElement('img');
  stickPerson.id = 'stick-person';
  stickPerson.src = 'images/left.png';  // starting with the left image
  stickPerson.style.bottom = '0px';
  stickPerson.style.left = baseLeft + 'px';
  stairContainer.appendChild(stickPerson);
  
  ladderDrawn = true;
};

const climbLadder = () => {
  if (!ladderDrawn || intervalId) return;
  
  currentStep = 0;
  let useLeft = true; // to alternate images for climbing effect
  
  // Use setInterval for a smooth climbing animation
  intervalId = setInterval(() => {
    if (currentStep >= numRungs - 1) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    currentStep++;
    
    // Calculate new vertical position based on the current rung
    const newBottom = currentStep * rungSpacing;
    
    // Alternate the stick person's horizontal position slightly to simulate climbing
    const offset = useLeft ? -10 : 10;
    const newLeft = baseLeft + offset;
    
    stickPerson.style.bottom = newBottom + 'px';
    stickPerson.style.left = newLeft + 'px';
    
    // Alternate the stick figure image to simulate climbing movement
    stickPerson.src = useLeft ? 'images/left.png' : 'images/right.png';
    useLeft = !useLeft;
  }, 500); // update every 500 milliseconds
};
