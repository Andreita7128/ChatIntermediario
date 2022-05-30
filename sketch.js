let screens = [];
let currentScreen = 0;

function preload() {
  screens[0] = loadImage('./assets/intermediario1.png');
  screens[1] = loadImage('./assets/intermediario2.png');
  screens[2] = loadImage('./assets/intermediario3.png');
  screens[3] = loadImage('./assets/intermediario4.png');
  screens[4] = loadImage('./assets/intermediario5.png');
  screens[5] = loadImage('./assets/intermediario6.png');
}

function setup() {
  createCanvas(428, 1034);
}

function draw() {
  background(250);
  showScreen();
  loadingRequest();
}

function mousePressed() {
  menuBar();
  flowRequest();
}

function showScreen() {
  image(screens[currentScreen], 0, 0);
}

function screenChanger(screen) {
  currentScreen = screen;
}

function button({
  xButton,
  yButton,
  wButton,
  hButton,
  screen
}) {
  const widthB = xButton + wButton;
  const heightB = yButton + hButton;
  if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {
    screenChanger(screen);
  }
}

function menuBar() {
  if (currentScreen === 1) {
    chat({x: 51, y: 961, w: 27, h: 73});
    ongoingRequests({x: 185, y: 961, w: 60, h: 73});
    completedRequest({x: 333, y: 961, w: 44, h: 73});
  } else {
    chat({x: 51, y: 853, w: 27, h: 73});
    ongoingRequests({x: 185, y: 853, w: 60, h: 73});
    completedRequest({x: 333, y: 853, w: 44, h: 73});
  }
}

function chat({x, y, w, h}) {
  button({
    xButton: x,
    yButton: y,
    wButton: w,
    hButton: h,
    screen: 0
  });
}

function ongoingRequests({x, y, w, h}) {
  button({
    xButton: x,
    yButton: y,
    wButton: w,
    hButton: h,
    screen: 4
  });
}

function completedRequest({x, y, w, h}) {
  button({
    xButton: x,
    yButton: y,
    wButton: w,
    hButton: h,
    screen: 5
  });
}

function back(returnScreen) {
  button({
    xButton: 28,
    yButton: 57,
    wButton: 16,
    hButton: 28,
    screen: returnScreen
  });
}

function flowRequest() {
  switch (currentScreen) {
    case 0:
      button({
        xButton: 283,
        yButton: 235,
        wButton: 115,
        hButton: 35,
        screen: 1
      });

      button({
        xButton: 283,
        yButton: 381,
        wButton: 115,
        hButton: 35,
        screen: 1
      });

      button({
        xButton: 283,
        yButton: 527,
        wButton: 115,
        hButton: 35,
        screen: 1
      });

      button({
        xButton: 283,
        yButton: 673,
        wButton: 115,
        hButton: 35,
        screen: 1
      });

      break;
    case 1:
      back(0);
      button({
        xButton: 55,
        yButton: 869,
        wButton: 146,
        hButton: 52,
        screen: 2
      });
      button({
        xButton: 226,
        yButton: 869,
        wButton: 146,
        hButton: 52,
        screen: 0
      });
      break;
    case 2:
      back(1);
      button({
        xButton: 111,
        yButton: 664,
        wButton: 205,
        hButton: 54,
        screen: 1
      });
      break;
    case 3:
      back(1);
      button({
        xButton: 50,
        yButton: 540,
        wButton: 146,
        hButton: 52,
        screen: 0
      });

      button({
        xButton: 221,
        yButton: 540,
        wButton: 146,
        hButton: 52,
        screen: 1
      });

      break;
  }
}

function loadingRequest() {
  if (currentScreen === 2) {
    setTimeout( () => {
      currentScreen = 3;
    }, 2000)
  }
}