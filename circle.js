const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

const path1 = [
  { x: 410, y: 15 },
  { x: 410, y: 55 }, /* down */
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
  { x: 290, y: 375 }, /* up */
  { x: 290, y: 335 },
  { x: 290, y: 295 },
  { x: 290, y: 255 },
  { x: 290, y: 215 },
  { x: 290, y: 175 },
  { x: 290, y: 135 },
  { x: 290, y: 95 },
  { x: 290, y: 55 },
  { x: 290, y: 15 },
  { x: 240, y: 15 }, /* left */
  { x: 210, y: 15 },
  { x: 170, y: 15 },
  { x: 130, y: 15 },
  { x: 90, y: 15 },
  { x: 40, y: 15 },
  { x: 10, y: 15 },
  { x: 10, y: 55 }, /* down */
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
];

const path2 = [
  { x: 450, y: 15 },
  { x: 450, y: 55 },
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
  { x: 410, y: 455 }, /* left */
  { x: 370, y: 455 },
  { x: 330, y: 455 },
  { x: 290, y: 455 },
  { x: 250, y: 455 }, 
  { x: 250, y: 415 }, /* up */
  { x: 250, y: 375 },
  { x: 250, y: 335 },
  { x: 250, y: 295 },
  { x: 250, y: 255 },
  { x: 250, y: 215 },
  { x: 250, y: 175 },
  { x: 250, y: 135 },
  { x: 250, y: 95 },
  { x: 250, y: 55 },
  { x: 210, y: 55 }, /* left */
  { x: 170, y: 55 },
  { x: 130, y: 55 },
  { x: 90, y: 55 },
  { x: 50, y: 55 },
  { x: 50, y: 95 }, /* down */
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
];

const path3 = [
  { x: 490, y: 15 },
  { x: 490, y: 55 }, /* down */
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
  { x: 450, y: 495 }, /* left */
  { x: 410, y: 495 },
  { x: 370, y: 495 },
  { x: 330, y: 495 },
  { x: 290, y: 495 },
  { x: 250, y: 495 },
  { x: 210, y: 495 },
  { x: 210, y: 455 }, /* up */
  { x: 210, y: 415 },
  { x: 210, y: 375 },
  { x: 210, y: 335 },
  { x: 210, y: 295 },
  { x: 210, y: 255 },
  { x: 210, y: 215 },
  { x: 210, y: 175 },
  { x: 210, y: 135 },
  { x: 210, y: 95 },
  { x: 170, y: 95 }, /* left */
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
];

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

    setTimeout(moveCircle1, speed);
  }
}

function moveCircle2() {
  if (step2 < path2.length) {
    const destinationX = path2[step2].x;
    const destinationY = path2[step2].y;

    circle2.style.left = `${destinationX}px`;
    circle2.style.top = `${destinationY}px`;

    step2++;

    setTimeout(moveCircle2, speed);
  }
}

function moveCircle3() {
  if (step3 < path3.length) {
    const destinationX = path3[step3].x;
    const destinationY = path3[step3].y;

    circle3.style.left = `${destinationX}px`;
    circle3.style.top = `${destinationY}px`;

    step3++;

    setTimeout(moveCircle3, speed);
  }
}
moveCircle1();
moveCircle2();
moveCircle3();
