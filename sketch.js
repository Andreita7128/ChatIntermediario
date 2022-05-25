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
  createCanvas(428, 926);
}

function draw() {
  background(220);
  showScreen();
  loadingRequest();
}

function mousePressed() {
  menu();
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

function menu() {
  chat();
  ongoingRequests();
  completedRequest();
}

function chat() {
  button({
    xButton: 51,
    yButton: 853,
    wButton: 27,
    hButton: 73,
    screen: 0
  });
}

function ongoingRequests() {
  button({
    xButton: 185,
    yButton: 853,
    wButton: 60,
    hButton: 73,
    screen: 4
  });
}

function completedRequest() {
  button({
    xButton: 333,
    yButton: 853,
    wButton: 44,
    hButton: 73,
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
        yButton: 752,
        wButton: 146,
        hButton: 52,
        screen: 2
      });
      button({
        xButton: 226,
        yButton: 752,
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
    setTimeout(() => {
      currentScreen = 3;
    }, 3000)
  }
}