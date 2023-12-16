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
      cell.style.borderLeft = "3px solid rgb(0, 255, 0)";
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
      cell.style.borderLeft = "2px solid rgb(0, 255, 0)";
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
      cell.style.borderTop = "3px solid rgb(0,255, 0)";
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
      cell.style.borderTop = "2px solid rgb(0,255, 0)";
      /* cell.style.boxShadow = "0px -5px 5px rgba(192, 192, 192, 0.5)" */
    }
    if (["d1", "e1"].includes(cellContent)) {
      cell.style.borderBottom = "3px solid rgb(0, 255, 0)";
    }
  }
});

const circleTrack = [
  { content: "k13" },
  { content: "k12" },
  { content: "k11" },
  { content: "k10" },
  { content: "k9" },
  { content: "k8" },
  { content: "k7" },
  { content: "k6" },
  { content: "k5" },
  { content: "k4" },
  { content: "k3" },
  { content: "k2" },
  { content: "j2" },
  { content: "i2" },
  { content: "h2" },
  { content: "g2" },
  { content: "f2" },
  { content: "f3" },
  { content: "f4" },
  { content: "f5" },
  { content: "f6" },
  { content: "f7" },
  { content: "f8" },
  { content: "f9" },
  { content: "f10" },
  { content: "f11" },
  { content: "f12" },
  { content: "e12" },
  { content: "d12" },
  { content: "c12" },
  { content: "b12" },
  { content: "a12" },
  { content: "a11" },
  { content: "a10" },
  { content: "a9" },
  { content: "a8" },
  { content: "a7" },
  { content: "a6" },
  { content: "a5" },
  { content: "a4" },
  { content: "a3" },
  { content: "a2" },
  { content: "a1" },
  { content: "a" },
];

const circle = document.querySelector(".circle");
const speed = 2;

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
    cell.style.backgroundColor = "blue";
    
  }
});

const removeCellBoxShadow = ["d1", "e1"];

allCells.forEach((cell) => {
  const cellContent = cell.textContent.trim();
  if (removeCellBoxShadow.includes(cellContent)) {
    cell.style.boxShadow = "5px 0px 5px rgba(192, 192, 192, 0.5)";
  }
});
