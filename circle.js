import { getTowerCount, incrementTowerCount } from "./script.js";

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

const towerRange = 3;

const tileWidth = 40;
const tileHeight = 40;
const circleWidth = 20;
const circleHeight = 20;
/* define speed in ms */
const speed = 50000;
/* define delay between tower shot */
const cooldown = 5000;
const towersOnCooldownArray = [];
let circleCount = 0;
const currentTowerCount = getTowerCount();
const circleScoreDisplay = document.getElementById("circle-score");
const squareScoreDisplay = document.getElementById("square-score");

const path1 = [
  { x: 410, y: 15 },
  { x: 410, y: 55 } /* down */,
  { x: 410, y: 95 },
  { x: 410, y: 135 },
  { x: 410, y: 175 },
  { x: 410, y: 215 },
  { x: 410, y: 255 },
  { x: 410, y: 295 },
  { x: 410, y: 335 },
  { x: 410, y: 375 },
  { x: 410, y: 415 } /* left */,
  { x: 370, y: 415 },
  { x: 330, y: 415 },
  { x: 290, y: 415 } /* up */,
  { x: 290, y: 375 },
  { x: 290, y: 335 },
  { x: 290, y: 295 },
  { x: 290, y: 255 },
  { x: 290, y: 215 },
  { x: 290, y: 175 },
  { x: 290, y: 135 },
  { x: 290, y: 95 },
  { x: 290, y: 55 },
  { x: 290, y: 15 },
  { x: 240, y: 15 } /* left */,
  { x: 210, y: 15 },
  { x: 170, y: 15 },
  { x: 130, y: 15 },
  { x: 90, y: 15 },
  { x: 40, y: 15 },
  { x: 10, y: 15 },
  { x: 10, y: 55 } /* down */,
  { x: 10, y: 95 },
  { x: 10, y: 135 },
  { x: 10, y: 175 },
  { x: 10, y: 215 },
  { x: 10, y: 255 },
  { x: 10, y: 295 },
  { x: 10, y: 335 },
  { x: 10, y: 375 },
  { x: 10, y: 415 },
  { x: 10, y: 455 },
  { x: 10, y: 495 },
  { x: 10, y: 535 },
];

const path2 = [
  { x: 450, y: 15 },
  { x: 450, y: 55 } /* down */,
  { x: 450, y: 95 },
  { x: 450, y: 135 },
  { x: 450, y: 175 },
  { x: 450, y: 215 },
  { x: 450, y: 255 },
  { x: 450, y: 295 },
  { x: 450, y: 335 },
  { x: 450, y: 375 },
  { x: 450, y: 415 },
  { x: 450, y: 455 },
  { x: 410, y: 455 } /* left */,
  { x: 370, y: 455 },
  { x: 330, y: 455 },
  { x: 290, y: 455 },
  { x: 250, y: 455 },
  { x: 250, y: 415 } /* up */,
  { x: 250, y: 375 },
  { x: 250, y: 335 },
  { x: 250, y: 295 },
  { x: 250, y: 255 },
  { x: 250, y: 215 },
  { x: 250, y: 175 },
  { x: 250, y: 135 },
  { x: 250, y: 95 },
  { x: 250, y: 55 },
  { x: 210, y: 55 } /* left */,
  { x: 170, y: 55 },
  { x: 130, y: 55 },
  { x: 90, y: 55 },
  { x: 50, y: 55 },
  { x: 50, y: 95 } /* down */,
  { x: 50, y: 135 },
  { x: 50, y: 175 },
  { x: 50, y: 215 },
  { x: 50, y: 255 },
  { x: 50, y: 295 },
  { x: 50, y: 335 },
  { x: 50, y: 375 },
  { x: 50, y: 415 },
  { x: 50, y: 455 },
  { x: 50, y: 495 },
  { x: 50, y: 535 },
];

const path3 = [
  { x: 490, y: 15 },
  { x: 490, y: 55 } /* down */,
  { x: 490, y: 95 },
  { x: 490, y: 135 },
  { x: 490, y: 175 },
  { x: 490, y: 215 },
  { x: 490, y: 255 },
  { x: 490, y: 295 },
  { x: 490, y: 335 },
  { x: 490, y: 375 },
  { x: 490, y: 415 },
  { x: 490, y: 455 },
  { x: 490, y: 495 },
  { x: 450, y: 495 } /* left */,
  { x: 410, y: 495 },
  { x: 370, y: 495 },
  { x: 330, y: 495 },
  { x: 290, y: 495 },
  { x: 250, y: 495 },
  { x: 210, y: 495 },
  { x: 210, y: 455 } /* up */,
  { x: 210, y: 415 },
  { x: 210, y: 375 },
  { x: 210, y: 335 },
  { x: 210, y: 295 },
  { x: 210, y: 255 },
  { x: 210, y: 215 },
  { x: 210, y: 175 },
  { x: 210, y: 135 },
  { x: 210, y: 95 },
  { x: 170, y: 95 } /* left */,
  { x: 130, y: 95 },
  { x: 90, y: 95 },
  { x: 90, y: 135 } /* down */,
  { x: 90, y: 175 },
  { x: 90, y: 215 },
  { x: 90, y: 255 },
  { x: 90, y: 295 },
  { x: 90, y: 335 },
  { x: 90, y: 375 },
  { x: 90, y: 415 },
  { x: 90, y: 455 },
  { x: 90, y: 495 },
  { x: 90, y: 535 },
];

const path4 = [
  { x: 410, y: 15 },
  { x: 410, y: 55 } /* down */,
  { x: 410, y: 95 },
  { x: 410, y: 135 },
  { x: 410, y: 175 },
  { x: 410, y: 215 },
  { x: 410, y: 255 },
  { x: 410, y: 295 },
  { x: 410, y: 335 },
  { x: 410, y: 375 },
  { x: 410, y: 415 }, 
  { x: 370, y: 415 }, /* left */
  { x: 330, y: 415 },
  { x: 290, y: 415 },
  { x: 250, y: 415 },
  { x: 250, y: 375 }, /* up */
  { x: 250, y: 335 },
  { x: 250, y: 295 },
  { x: 250, y: 255 },
  { x: 250, y: 215 },
  { x: 250, y: 175 },
  { x: 250, y: 135 },
  { x: 250, y: 95 },
  { x: 210, y: 95 }, /* left */
  { x: 170, y: 95 },
  { x: 130, y: 95 },
  { x: 90, y: 95 },
  { x: 90, y: 135 }, /* down */
  { x: 90, y: 175 },
  { x: 90, y: 215 },
  { x: 90, y: 255 },
  { x: 90, y: 295 },
  { x: 90, y: 335 },
  { x: 90, y: 375 },
  { x: 90, y: 415 },
  { x: 90, y: 455 },
  { x: 90, y: 495 },
  { x: 90, y: 535 },
]
function checkTowerRange(circle, path, towerClass, cooldown, towerOnCooldown) {
  /* defines the implicit method for describing the size and position of the circle */
  const circleRect = circle.getBoundingClientRect();
  /* defines the calculation of the horizontal coordinate of the center of the circle */
  const circleX = circleRect.x + circleRect.width / 2;
  /* defines the calculation of the vertical coordinate of the center of the circle */
  const circleY = circleRect.y + circleRect.height / 2;
  /* defines the rounded horizontal coordinate of the tile containing the circle */
  const containingTileX = Math.floor(circleX / tileWidth);
  /* defines the rounded vertical coordinate of the tile containing the circle */
  const containingTileY = Math.floor(circleY / tileHeight);
  /* defines the check for nearby towers */
  const nearbyTowerRange = document.querySelectorAll(`.${towerClass}`);

  /* for...of loop that iterates through the towerWalls class */
  for (const currentTower of nearbyTowerRange) {
    /* defines the implicit method for describing the size and position of the detected tower */
    const tileRect = currentTower.getBoundingClientRect();
    /* defines the rounded horizontal coordinate of the detected tower */
    const currentTileX = Math.floor(tileRect.x / tileWidth);
    /* defines the rounded vertical coordinate of the detected tower */
    const currentTileY = Math.floor(tileRect.y / tileHeight);
    /* defines the Manhattan distance between the circle's tile and the tower */
    const circleToTowerDistance =
      Math.abs(containingTileX - currentTileX) +
      Math.abs(containingTileY - currentTileY);

    /* defines what happens when a circle is within an off cooldown tower range */
    if (
      !towersOnCooldownArray.includes(currentTower) &&
      circleToTowerDistance <= towerRange
    ) {
      circle.style.backgroundColor = "rgb(255, 0, 255)";
      circle.style.opacity = "0";
      circle.remove();
      circleCount++;
      circleScoreDisplay.textContent = `Circles: ${circleCount}`;
      if (circleCount > 0 && circleCount % 4 === 0) {
        incrementTowerCount();
        squareScoreDisplay.textContent = `Squares: ${currentTowerCount}`;
      }
      /* adds the cooldown class to the tower currently being iterated */
      currentTower.classList.add("towerOnCooldown");
      /* puts the current tower in the cooldown array */
      towersOnCooldownArray.push(currentTower);

      setTimeout(() => {
        currentTower.classList.remove("towerOnCooldown");
        const index = towersOnCooldownArray.indexOf(currentTower);
        if (index > -1) {
          towersOnCooldownArray.splice(index, 1);
        }
      }, cooldown);

      break;
    }
  }
}

function gameOver() {
  const gameOverHTML = `
<h1>Game Over</h1>
<p>Try Again?</p>
<button id="restartButton">Restart</button>`;

  document.body.innerHTML = gameOverHTML;

  // Add a click event listener to the restart button
  const restartButton = document.getElementById("restartButton");

  // Add a click event listener
  restartButton.addEventListener("click", function () {
    // Reload the page
    location.reload();
  });
}

function createCircle(path, towerClass, className) {
  const fieldDiv = document.getElementById("field-div");
  /* create circle div */
  const circle = document.createElement("div");
  /* give it class circle */
  circle.className = `circle ${className}`;
  /* set the starting point equal to the x and y coordinates of each path */
  const startingX = path[0].x;
  const startingY = path[0].y;

  circle.style.left = `${startingX}px`;
  circle.style.top = `${startingY}px`;

if (fieldDiv) {
  let circleRect;

  circle.addEventListener("animationiteration", () => {
    checkGameOver(circle);
  });

  function checkGameOver(circle) {
    circleRect = circle.getBoundingClientRect();

    const a1Rect = document.getElementById("a1").getBoundingClientRect();
    const b1Rect = document.getElementById("b1").getBoundingClientRect();
    const c1Rect = document.getElementById("c1").getBoundingClientRect();

    function reachedEnd(rect1, rect2) {
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    }
    if (
      reachedEnd(circleRect, a1Rect) ||
      reachedEnd(circleRect, b1Rect) ||
      reachedEnd(circleRect, c1Rect)
    ) {
      gameOver();
    }
  }
}
  /* requests implicit timestamp parameter */
  function moveCircle(timestamp) {
    /* sets start time equal to timestamp if circle.startTime has not been initialized */
    if (!circle.startTime) {
      circle.startTime = timestamp;
    }
    /* sets elapsed time to the difference between timestamp and start time */
    const elapsedTime = timestamp - circle.startTime;
    /* sets progress to a value between 0 and 1 based on time and speed */
    const circleProgress = Math.min(elapsedTime / speed, 1);
    /* checks if progress is not completed yet */
    if (circleProgress < 1) {
      /* sets x and y coordinates based on the circleProgress value */
      const { x, y } = path[Math.floor(circleProgress * (path.length - 1))];
      /* sets the transform property based on x and y coordinates*/
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.transform = `translate(${x}px, ${y}px)`;

      checkTowerRange(circle, path, towerClass, cooldown);

      requestAnimationFrame(moveCircle);
    }
  }
  if (fieldDiv) {
    fieldDiv.appendChild(circle);
    requestAnimationFrame(moveCircle);
  }
}

const startButton = document.getElementById("start-button");

let gameTimer = 0;
let timerOn = false;
let seconds = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function startTimer() {
  if (!timerOn) {
    timerOn = true;

  setInterval(() => {
      seconds++;
      gameTimer = seconds;
      startButton.textContent = formatTime(gameTimer);
    }, 1000);
  }
}
let intervalPath1, intervalPath2, intervalPath3, intervalPath4;
function startCircles() {
  clearInterval(intervalPath1);
  clearInterval(intervalPath2);
  clearInterval(intervalPath3);
  clearInterval(intervalPath4)

  setTimeout(() => {
    intervalPath1 = setInterval(() => createCircle(path2, "squareTower-class", "normal"), 5000);
  }, 2000);
  setTimeout(() => {
    intervalPath2 = setInterval(() => createCircle(path1, "squareTower-class", "normal"), 5000);
  }, 3000);
  setTimeout(() => {
    intervalPath3 = setInterval(() => createCircle(path3, "squareTower-class", "normal"), 5000);
  }, 3000);
/*   setTimeout(() => {
    intervalPath4 = setInterval(() => createCircle(path4, "squareTower-class", "hard"), 5000);
  }, 5000); */
}
startButton.addEventListener("click", () => {
  startTimer();
  startCircles();
});
