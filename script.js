export { towerCount };

/* sets fieldDiv to "field-div" */
const fieldDiv = document.getElementById("field-div");

/* starts rows from the bottom */
for (let row = 13; row >= 1; row--) {
  /* starts columns from the left */
  for (let col = 1; col <= 13; col++) {
    /* sets the cell content to "a1", "a2", "a3", etc */
    const cellContent = `${String.fromCharCode(96 + col)}${row}`;
    /* creates a div referred to as fieldTile */
    const fieldTile = document.createElement("div");
    /* set id based on cell string */
    fieldTile.id = cellContent;
    /* add class */
    fieldTile.classList.add("field-tile-class");
    /* adds div */
    fieldDiv.appendChild(fieldTile);
    /* adds text based on playingField array */
    fieldTile.textContent = cellContent;
  }
}
/* declare that allCells refers to cells with .field-tile-class */
const allCells = document.querySelectorAll(".field-tile-class");

const towerWalls = [
/*   "i13",
  "j13", */
  "i12",
  "j12",
  "i11",
  "j11",
  "i10",
  "j10",
  "i9",
  "j9",
  "i8",
  "j8",
  "j7",
  "i7",
  "j6",
  "i6",
  "i5",
  "j5",
/*   "i4",
  "j4", */
/*   "d1", */
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
/*   "d10", */
/*   "e1", */
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
/*   "e10", */
];

let towerCount = 2;

export function getTowerCount() {
  return towerCount;
}

export function incrementTowerCount() {
  towerCount++;
}

const squareScoreDisplay = document.getElementById("square-score");

allCells.forEach((cell) => {
  /* equates placeholder variable with loop result */
  const cellIdValue = cell.id;
  /* defines criteria for towerWalls */
  if (towerWalls.includes(cellIdValue)) {
    /* changes class to towerWalls */
    cell.classList.add("towerWalls");
  }
});
/* define createTower function */
const createTower = document.querySelectorAll(".towerWalls");
/* createTower changes background color and class of tile */
createTower.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (towerCount > 0) {
      cell.classList.remove("towerWalls");
      cell.classList.add("squareTower-class");
      towerCount--;
      cell.style.cursor = "default";
      squareScoreDisplay.textContent = `Squares: ${towerCount}`;
    }
  });
});

function gameWin() {
  setTimeout(() => {
    const gameWinHTML = `
    <h1>You Win!</h1>
    <p>Try Again?</p>
    <button id="restartButton">Restart</button>`;

    document.body.innerHTML = gameWinHTML;

    // Add a click event listener to the restart button
    const restartButton = document.getElementById("restartButton");

    // Add a click event listener
    restartButton.addEventListener("click", function () {
      // Reload the page
      location.reload();
    });
  }, 1000);
}

const gameWinClass = "squareTower-class";
const gameWinCount = 32;

function checkGameWinCount() {
  const elements = document.getElementsByClassName(gameWinClass);

  if (elements.length >= gameWinCount) {
    gameWin();
  }
}
