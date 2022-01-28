// Nonogram Game

// Hardcoded Levels
let level1 = [

  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "2", "3", " ", " ", " "]
  [" ", " ", " ", " ", " ", "4", "6", "8", "9", "10", "10", "10", "10", "10", "10", "5", "3", "5", "4", " ", " "]
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", "3", "3", 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [" ", "4", "4", 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [" ", "10", "3", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [" ", "10", "2", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [" ", "11", "2", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
  [" ", " ", "14", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [" ", " ", "12", 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [" ", " ", "10", 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [" ", " ", "8", 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [" ", " ", "6", 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [" ", " ", "4", 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", "2", 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let level2 = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "3", "3", "9", "8", " ", " ", " ", " ", " ", " ", " "]
  [" ", " ", " ", " ", " ", " ", " ", " ", "9", "9", "4", "4", "2", "2", "7", "5", "2", "1", "2", " ", " "]
  [" ", " ", " ", " ", "6", "10", "12", "14", "2", "2", "2", "1", "1", "1", "1", "1", "2", "2", "2", "6", " "]
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [" ", " ", "6", 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [" ", " ", "10", 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [" ", " ", "12", 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  ["5", "4", "1", 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  ["5", "4", "1", 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  [" ", "12", "1", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
  [" ", "11", "1", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [" ", "10", "1", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [" ", "9", "1", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [" ", "5", "1", 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [" ", "4", "1", 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  ["3", "2", "1", 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  ["3", "2", "2", 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [" ", "3", "2", 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [" ", "4", "2", 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [" ", " ", "6", 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [" ", " ", " ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let level3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Global Variables
let level1Unsave = JSON.parse(JSON.stringify(level1));
let level2Unsave = JSON.parse(JSON.stringify(level2));
let level3Unsave = JSON.parse(JSON.stringify(level3));
let menu = true;
let returnMenu = false;
let gramComplete = false;
let level1Load = false;
let level2Load = false;
let level3Load = false;
let grid = "menu";
let gridSize = 18;
let cellHeight, cellWidth;
let cellX, cellY;
let nums = [];
let currentLevel;
let buttonWidth = 100;
let buttonHeight = 100;
let returnButtonWidth = 200;
let returnButtonHeight = 100;
let clickSound, misclickSound;
let firstLvl, secondLvl, thirdLvl, returnToMenu, winning;
let state;
let lastTimeClicked;

// Loading Click Noises
function preload() {
  clickSound = loadSound("assets/Menu Selection Click.wav");
  misclickSound = loadSound("assets/Misclick Sound.wav");
}

function setup() {
  // Creating Grid Perameters
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }
  else {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }

  // Giving Variables Values
  state = "starting";
  grid = level1;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  firstLvl = new Button("level1", width/4, height/2, buttonWidth, buttonHeight, color(117, 187, 220), color(137, 207, 240));
  secondLvl = new Button("level2", width/2, height/2, buttonWidth, buttonHeight, color(117, 187, 220), color(137, 207, 240));
  thirdLvl = new Button("level3", width/1.33, height/2, buttonWidth, buttonHeight, color(117, 187, 220), color(137, 207, 240));
  returnToMenu = new Button("backToMenu", width/2, height/2, returnButtonWidth, returnButtonHeight, color(117, 187, 220), color(137, 207, 240));
  winning = new Button("complete", width/2, height/2, returnButtonWidth, returnButtonHeight, color(117, 187, 220), color(137, 207, 240));
}

function draw() {
  // Displaying Menu
  if (menu) {
    background(225); 
    title();
    firstLvl.display();
    secondLvl.display();
    thirdLvl.display();
  }

  // Displaying Grid
  else if (!menu) {
    // Loading the PreClicked Tiles
    if (!level1Load && grid === level1) {
      preClickedBoxes();
      level1Load = true;
    }
    if (!level2Load && grid === level2) {
      preClickedBoxes();
      level2Load = true;
    }
    if (!level3Load && grid === level3) {
      preClickedBoxes();
      level3Load = true;
    }
    
    winCondition();
    lossCondition();
    displayGrid();
    // displayNums();
    
    if (gramComplete) {
      winning.display();
    }

    if (returnMenu) {
      returnToMenu.display();
    }
  }
}

// The Button Class
class Button {
  constructor(level, x, y, butWidth, butHeight, hoverColor, notHoverColor) {
    this.purpose = level;
    this.x = x;
    this.y = y;
    this.butWidth = butWidth;
    this.butHeight = butHeight;
    this.hoverColor = hoverColor;
    this.notHoverColor = notHoverColor;
  }

  // Displaying the Buttons
  display() {
    noStroke();
    if (this.isHover(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.notHoverColor);
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.butWidth, this.butHeight);
    if (this.purpose === "level1") {
      fill("white");
      textSize(this.butWidth*0.75);
      textAlign(CENTER, CENTER);
      text("1", this.x, this.y+7);
    }
    if (this.purpose === "level2") {
      fill("white");
      textSize(this.butWidth*0.75);
      textAlign(CENTER, CENTER);
      text("2", this.x, this.y+7);
    }
    if (this.purpose === "level3") {
      fill("white");
      textSize(this.butWidth*0.75);
      textAlign(CENTER, CENTER);
      text("3", this.x, this.y+7);
    }
    if (this.purpose === "backToMenu") {
      fill("white");
      textSize(40);
      textAlign(CENTER, CENTER);
      text("RETURN", this.x, this.y+5);
    }
    if (this.purpose === "complete") {
      fill("white");
      textSize(40);
      textAlign(CENTER, CENTER);
      text("WINNER", this.x, this.y+5);
    }
  }

  // Checking if the Mouse is Hovering Over the Button
  isHover(x, y) {
    return x >= this.x - this.butWidth/2 && x <= this.x + this.butWidth/2 &&
           y >= this.y - this.butHeight/2 && y <= this.y + this.butHeight/2;
  }
}

// Resets the Level When at the Menu Screen (WIP)
function loadLevel() {
  level1 = level1Unsave;
  level2 = level2Unsave;
  level3 = level3Unsave;
}

// Adds the Title to the Menu Screen
function title() {
  textAlign(CENTER);
  fill("black");
  text("NONOGRAM", width/2, height/5);
}

// Making the Buttons Work
function mousePressed() {
  // Making Menu Buttons Work
  if (firstLvl.isHover(mouseX, mouseY) && menu) {
    clickSound.play();
    grid = level1;
    menu = false;
    lastTimeClicked = millis();
  }
  else if (secondLvl.isHover(mouseX, mouseY) && menu) {
    clickSound.play();
    grid = level2;
    menu = false;
    lastTimeClicked = millis();
  }
  else if (thirdLvl.isHover(mouseX, mouseY) && menu) {
    clickSound.play();
    grid = level3;
    menu = false;
    lastTimeClicked = millis();
  }
  
  // Making Exit Buttons Work
  if (returnToMenu.isHover(mouseX, mouseY) && returnMenu) {
    clickSound.play();
    grid = "menu";
    menu = true;
    returnMenu = false;
  }

  if (winning.isHover(mouseX, mouseY) && returnMenu) {
    clickSound.play();
    grid = "menu";
    menu = true;
    returnMenu = false;
  }

  // Making the Your Clicks Work
  cellX = Math.floor(mouseX/cellWidth);
  cellY = Math.floor(mouseY/cellHeight);

  if (grid !== "menu" && millis() > lastTimeClicked + 500) {
    console.log(millis);
    if (grid[cellY][cellX] === 1 && !menu && !returnMenu) {
      clickSound.play();
      grid[cellY][cellX] = 2;
    }
    if (grid[cellY][cellX] === 0 && !menu && !returnMenu) {
      misclickSound.play();
      grid[cellY][cellX] = "X";
    }
  }
}

// Bring up Return Button Mid-Game
function keyPressed() {
  if (keyCode === ESCAPE && !menu && !gramComplete) {
    returnMenu = true;
  }
}

// Displaying the Numbers (WIP)
function displayNums() {
  let count;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 1 || grid[y][x] === 2) {
        count++;
      }
      if (count >= 3) {
        returnMenu = true;
      }
    }
  }
}

// Getting Preclicked Boxes on the Grid
function preClickedBoxes() {
  let count = 0;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        let raNum = random(100);
    
        if (raNum < 51 && count < 324) {
          grid[y][x] = "XX";
          count++;
        }
      }
    }
  }
}

// Displaying the Grid
function displayGrid() {
  // Calling Grid Lines Function
  drawGridLines();

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      fill("white");
      strokeWeight(1);
      rectMode(CORNER);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);

      if (grid[y][x] === 2) {
        fill("black");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === "X" || grid[y][x] === "XX") {
        fill("black");
        textSize(cellWidth*0.75);
        textAlign(CENTER, CENTER);
        text("X", x*cellWidth + cellWidth/2, y*cellHeight + cellHeight/2);
      }
      else if (grid[y][x] === "X" || grid[y][x] === "XX") {
        let numVar = grid[y][x];
        fill("black");
        textSize(cellWidth*0.75);
        textAlign(CENTER, CENTER);
        text(numVar, x*cellWidth + cellWidth/2, y*cellHeight + cellHeight/2);
      }
    }
  }
}

// Drawing the Grid Lines
function drawGridLines() {
  strokeWeight(1);
  stroke("black");
  for (let location=0; location<gridSize; location++) {
    line(0, cellHeight*location, width, cellHeight*location);
    line(cellWidth*location, 0, cellWidth*location, height);
  }
  line(width, 0, width, height);
  line(0, height, width, height);
}

// Setting Loss Condition
function lossCondition() {
  let count = 0;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === "X") {
        count++;
      }
      if (count >= 5) {
        returnMenu = true;
      }
    }
  }
}

// Setting Win Condition
function winCondition() {
  let count = 0;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 1) {
        count++;
      }
    }
  }
  if (count <= 0) {
    returnMenu = true;
  }
}