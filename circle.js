const circle = document.querySelector(".circle");

const path = [
{x: 440, y: 0},
{x: 440, y: 40},
{x: 440, y: 80},
{x: 440, y: 120},
{x: 440, y: 160},
{x: 440, y: 200},
{x: 440, y: 240},
{x: 440, y: 280},
{x: 440, y: 320},
{x: 440, y: 360},
{x: 440, y: 400},
{x: 440, y: 440},
{x: 400, y: 440},
{x: 360, y: 440},
{x: 320, y: 440},
{x: 280, y: 440},
{x: 240, y: 440},
{x: 240, y: 400},
{x: 240, y: 360},
{x: 240, y: 320},
{x: 240, y: 280},
{x: 240, y: 240},
{x: 240, y: 200},
{x: 240, y: 160},
{x: 240, y: 120},
{x: 240, y: 80},
{x: 240, y: 40},
{x: 200, y: 40},
{x: 160, y: 40},
{x: 120, y: 40},
{x: 80, y: 40},
{x: 40, y: 40},
{x: 40, y: 80},
{x: 40, y: 120},
{x: 40, y: 160},
{x: 40, y: 200},
{x: 40, y: 240},
{x: 40, y: 280},
{x: 40, y: 320},
{x: 40, y: 360},
{x: 40, y: 400},
{x: 40, y: 440},
{x: 40, y: 480},

  ];
  
let step = 0;
const speed = 1000;

function moveCircle() {
    if (step < path.length) {
        const cellWidth = 40;
        const cellHeight = 40;
        const destinationX = path[step].x * cellWidth;
        const destinationY = path[step].y * cellHeight;

        circle.style.left = `${destinationX}px`;
        circle.style.top = `${destinationY}px`;

        step++;

        setTimeout(moveCircle, speed);
    }
}

moveCircle()