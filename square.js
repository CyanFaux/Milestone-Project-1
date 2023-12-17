const fieldDiv = document.getElementById("field-div");

for (let row = 0; row < playingField.length; row++) {
  for (let col = 0; col < playingField[row].length; col++) {
    const fieldTile = document.createElement("div");
    fieldTile.textContent = playingField[row][col];
    fieldTile.classList.add("field-tile-class");
    fieldDiv.appendChild(fieldTile);
  }
}

const allCells = fieldDiv.querySelectorAll(".field-tile-class");

const flatPlayingField = playingField.flat();

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();
  if (flatPlayingField.includes(cellContent)) {
    if (
      [
        "d10",
        "d9",
        "d8",
        "d7",
        "d6",
        "d5",
        "d4",
        "d3",
        "d2",
        "d1",
        "f10",
        "f9",
        "f8",
        "f7",
        "f6",
        "f5",
        "f4",
        "f3",
        "f2",
        "f1",
        "i13",
        "i12",
        "i11",
        "i10",
        "i9",
        "i8",
        "i7",
        "i6",
        "i5",
        "i4",
        "k13",
        "k12",
        "k11",
        "k10",
        "k9",
        "k8",
        "k7",
        "k6",
        "k5",
        "k4",
      ].includes(cellContent)
    ) {
      cell.style.borderLeft = "4px solid rgb(0, 255, 0)";
      /*       cell.style.boxShadow = "-5px 0px 5px rgba(192, 192, 192, 0.5)" */
    }
    if (
      [
        "e10",
        "e9",
        "e8",
        "e7",
        "e6",
        "e5",
        "e4",
        "e3",
        "e2",
        "e1",
        "j13",
        "j12",
        "j11",
        "j10",
        "j9",
        "j8",
        "j7",
        "j6",
        "j5",
        "j4",
      ].includes(cellContent)
    ) {
      cell.style.borderLeft = "4px solid rgb(0, 255, 0)";
      /*       cell.style.boxShadow = "-5px 0px 5px rgba(192, 192, 192, 0.5)" */
    }
    if (
      [
        "d10",
        "d8",
        "d6",
        "d4",
        "d2",
        "e10",
        "e8",
        "e6",
        "e4",
        "e2",
        "i13",
        "i11",
        "i9",
        "i7",
        "i5",
        "i3",
        "j13",
        "j11",
        "j9",
        "j7",
        "j5",
        "j3",
      ].includes(cellContent)
    ) {
      cell.style.borderTop = "4px solid rgb(0,255, 0)";
      /*       cell.style.boxShadow = "0px -5px 5px rgba(192, 192, 192, 0.5)" */
    }
    if (
      [
        "d9",
        "d7",
        "d5",
        "d3",
        "d1",
        "e9",
        "e7",
        "e5",
        "e3",
        "e1",
        "i12",
        "i10",
        "i8",
        "i6",
        "i4",
        "j12",
        "j10",
        "j8",
        "j6",
        "j4",
      ].includes(cellContent)
    ) {
      cell.style.borderTop = "4px solid rgb(0,255, 0)";
      /* cell.style.boxShadow = "0px -5px 5px rgba(192, 192, 192, 0.5)" */
    }
    if (["d1", "e1"].includes(cellContent)) {
      cell.style.borderBottom = "4px solid rgb(0, 255, 0)";
    }
  }
});

const cellWalls = [
  "i13",
  "j13",
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
  "i4",
  "j4",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "d10",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "e10",
];

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();
  if (cellWalls.includes(cellContent)) {
    cell.style.boxShadow = "5px 5px 5px rgba(192, 192, 192, 0.5)";
  }
});

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();

  if (cellWalls.includes(cellContent)) {
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = "blue";
    });
  }
});

const cellGroups = [
    ["d10", "d9", "e10", "e9"],
    ["d8", "d7", "e8", "e7"],
    ["d6", "d5", "e6", "e5"],
    ["d4", "d3", "e4", "e3"],
    ["d2", "d1", "e2", "e1"],
    ["i13", "i12", "j13", "j12"],
    ["i11", "i10", "j11", "j10"],
    ["i9", "i8", "j9", "j8"],
    ["i7", "i6", "j7", "j6"],
    ["i5", "i4", "j5", "j4"],
]

function areAllCellsBlue(group) {
    for (const cellId of group) {
        const cell = document.querySelector(`.field-tile-class:contains("${cellId}")`)
        if (!cell) {
            console.log(`Cell with ID ${cellId} not found.`);
            return false;
        }
        if (!cell || getComputedStyle(cell).backgroundColor !== "rgb(0, 0, 255)") {
            console.log(`Cell with ID ${cellId} is not blue (background color: ${backgroundColor}).`);
            return false;
        }
    }
    console.log("cells merge!")
    return true;
   
}

const removeCellBoxShadow = ["d1", "e1"];

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();
  if (removeCellBoxShadow.includes(cellContent)) {
    cell.style.boxShadow = "5px 0px 5px rgba(192, 192, 192, 0.5)";
  }
});
