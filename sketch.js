let screens = [];
let actualScreen = 0;

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
  
}

function mousePressed() {
  menu();
}

function showScreen() {
  image(screens[actualScreen],0 ,0);
}

function screenChanger(screen) {
  actualScreen = screen;
}

function button ({xButton, yButton, wButton, hButton, screen}) {
  const widthB = xButton + wButton;
  const heightB = yButton + hButton;
  if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {
    console.log('click');
    screenChanger(screen);
  }
}


function menu() {
  chat();
  solicitudesEnCurso();
  solicitudesFinalizadas();
}

function chat() {
  button({xButton: 51, yButton: 853, wButton: 27, hButton: 73, screen: 0});
}

function solicitudesEnCurso() {
  button({xButton: 185, yButton: 853, wButton: 60, hButton: 73, screen: 4});
}

function solicitudesFinalizadas() {
  button({xButton: 333, yButton: 853, wButton: 44, hButton: 73, screen: 5});
}