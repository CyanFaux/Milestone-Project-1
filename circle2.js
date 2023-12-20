function circleEnemy(x, y) {
  let element = document.querySelector(".circle1");
  element.style.zIndex = 2;

  const circleStyles = {
    left: element.style.left,
    top: element.style.top,
    zIndex: element.style.zIndex,
  };
  let direction = null;

  function moveCharacter() {
    if (direction === "west") {
      x -= 1;
    }
    if (direction === "north") {
      y -= 1;
    }
    if (direction === "east") {
      x += 1;
    }
    if (direction === "south") {
      y += 1;
    }
    element.style.left = x + "px";
    element.style.top = y + "px";
  }

  setInterval(moveCharacter, 1);

  async function walkEast(time) {
    direction = "east";
    await sleep(time);
    stop();
  }

  async function walkNorth(time) {
    direction = "north";
    await sleep(time);
  }

  async function walkWest(time) {
    direction = "west";
    await sleep(time);
  }

  async function walkSouth(time) {
    direction = "south";
    await sleep(time);
  }

  function stop() {
    direction = null;
  }

  function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  return {
    element: element,
    walkWest: walkWest,
    walkNorth: walkNorth,
    walkEast: walkEast,
    walkSouth: walkSouth,
    stop: stop,
  };
}

let circle = circleEnemy(410, 15);

async function moveCircle(){
        await circle.walkSouth(6250)
        await circle.walkWest(400)
    
}
moveCircle()