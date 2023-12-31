const playingField = [
  [
    "a13",
    "b13",
    "c13",
    "d13",
    "e13",
    "f13",
    "g13",
    "h13",
    "i13",
    "j13",
    "k13",
    "l13",
    "m13",
  ],
  [
    "a12",
    "b12",
    "c12",
    "d12",
    "e12",
    "f12",
    "g12",
    "h12",
    "i12",
    "j12",
    "k12",
    "l12",
    "m12",
  ],
  [
    "a11",
    "b11",
    "c11",
    "d11",
    "e11",
    "f11",
    "g11",
    "h11",
    "i11",
    "j11",
    "k11",
    "l11",
    "m11",
  ],
  [
    "a10",
    "b10",
    "c10",
    "d10",
    "e10",
    "f10",
    "g10",
    "h10",
    "i10",
    "j10",
    "k10",
    "l10",
    "m10",
  ],
  [
    "a9",
    "b9",
    "c9",
    "d9",
    "e9",
    "f9",
    "g9",
    "h9",
    "i9",
    "j9",
    "k9",
    "l9",
    "m9",
  ],
  [
    "a8",
    "b8",
    "c8",
    "d8",
    "e8",
    "f8",
    "g8",
    "h8",
    "i8",
    "j8",
    "k8",
    "l8",
    "m8",
  ],
  [
    "a7",
    "b7",
    "c7",
    "d7",
    "e7",
    "f7",
    "g7",
    "h7",
    "i7",
    "j7",
    "k7",
    "l7",
    "m7",
  ],
  [
    "a6",
    "b6",
    "c6",
    "d6",
    "e6",
    "f6",
    "g6",
    "h6",
    "i6",
    "j6",
    "k6",
    "l6",
    "m6",
  ],
  [
    "a5",
    "b5",
    "c5",
    "d5",
    "e5",
    "f5",
    "g5",
    "h5",
    "i5",
    "j5",
    "k5",
    "l5",
    "m5",
  ],
  [
    "a4",
    "b4",
    "c4",
    "d4",
    "e4",
    "f4",
    "g4",
    "h4",
    "i4",
    "j4",
    "k4",
    "l4",
    "m4",
  ],
  [
    "a3",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "i3",
    "j3",
    "k3",
    "l3",
    "m3",
  ],
  [
    "a2",
    "b2",
    "c2",
    "d2",
    "e2",
    "f2",
    "g2",
    "h2",
    "i2",
    "j2",
    "k2",
    "l2",
    "m2",
  ],
  [
    "a1",
    "b1",
    "c1",
    "d1",
    "e1",
    "f1",
    "g1",
    "h1",
    "i1",
    "j1",
    "k1",
    "l1",
    "m1",
  ],
];

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

function findCellById(cellId) {
  let foundCell = null;
  allCells.forEach((cell) => {
    if (cell.textContent.trim() === cellId) {
      foundCell = cell;
    }
  });
  return foundCell;
}

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();

  if (cellWalls.includes(cellContent)) {
    const blueCellId = cell.textContent.trim();
    console.log("blueCellId:", blueCellId);
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = "blue";
  }
)}
      });

// Define a function to determine the border pattern relative to the blue cell's position
function getBorderPattern(blueCellId) {
  const fixedPattern = [
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: -1, y: -1 },
    { x: -2, y: -2 },
    { x: -1, y: 0 },
    { x: -2, y: 0 },
    { x: -3, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: -2 },
    { x: 0, y: -3 },
  ];
  return fixedPattern;
}


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

/* function areAllCellsBlue(group) {
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
   
} */

const removeCellBoxShadow = ["d1", "e1"];

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();
  if (removeCellBoxShadow.includes(cellContent)) {
    cell.style.boxShadow = "5px 0px 5px rgba(192, 192, 192, 0.5)";
  }
});

let step1 = 0;
let step2 = 0;
let step3 = 0;
const speed = 1000;

function moveCircle1() {
  if (step1 < path1.length) {
    const destinationX = path1[step1].x;
    const destinationY = path1[step1].y;

    circle1.style.left = `${destinationX}px`;
    circle1.style.top = `${destinationY}px`;

    step1++;

    checkTowerRange(circle1, path1, "squareTower-class", 5000);

    setTimeout(moveCircle1, speed);
  } else {

  }
}

function moveCircle2() {
  if (step2 < path2.length) {
    const destinationX = path2[step2].x;
    const destinationY = path2[step2].y;

    circle2.style.left = `${destinationX}px`;
    circle2.style.top = `${destinationY}px`;

    step2++;

    checkTowerRange(circle2, path2, "squareTower-class", 5000);

    setTimeout(moveCircle2, speed);
  } else {
    /*     gameOver(); */
  }
}

function moveCircle3() {
  /* enemy has not reached end */
  if (step3 < path3.length) {
    const destinationX = path3[step3].x;
    const destinationY = path3[step3].y;

    circle3.style.left = `${destinationX}px`;
    circle3.style.top = `${destinationY}px`;

    step3++;

    checkTowerRange(circle3, path3, "squareTower-class", 5000);

    setTimeout(moveCircle3, speed);
  } else {
    /* enemy has reached end */
    /*     gameOver(); */
  }
}

moveCircle1();
moveCircle2();
moveCircle3();

const speed = 1000;
const circleDelay = 5000;

function createCircle(path, towerClass) {

  const circle = document.createElement("div");
  circle.className = "circle";

  const startingX = path[0].x;
  const startingY = path[0].y;

  console.log(`Starting X: ${startingX}`);
  console.log(`Starting Y: ${startingY}`);

  circle.style.left = `${startingX}px`;
  circle.style.top = `${startingY}px`;

  let step = 0;

  function moveCircle() {
    if (step < path.length) {
      const destinationX = path[step].x;
      const destinationY = path[step].y;

      circle.style.left = `${destinationX}px`;
      circle.style.top = `${destinationY}px`;

      step++;

      checkTowerRange(circle, path, towerClass, 5000);

      setTimeout(moveCircle, speed);
    } else {
      circle.remove();
      /*     gameOver(); */
    }
  }
  document.body.appendChild(circle);
  /* moveCircle(); */
}

function startCircles() {
  createCircle(path1, "squareTower-class");
  createCircle(path2, "squareTower-class");
  createCircle(path3, "squareTower-class");
}

startCircles();