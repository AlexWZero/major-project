// Nonogram Game

// Hardcoded Levels
let level1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let level2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
let firstLvl, secondLvl, thirdLvl, returnToMenu, backToMenu;

function setup() {

  // Creating Grid Perameters
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }
  else {
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }

  // Giving Variables Values
  grid = level1;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  firstLvl = new Button(level1, width/4, height/2, buttonWidth, buttonHeight, "grey", "black");
  secondLvl = new Button(level2, width/2, height/2, buttonWidth, buttonHeight, "grey", "black");
  thirdLvl = new Button(level3, width/1.33, height/2, buttonWidth, buttonHeight, "grey", "black");
  returnToMenu = new Button(backToMenu, width/2, height/2, returnButtonWidth, returnButtonHeight, "grey", "black");
}

function draw() {

  // Displaying Menu or Grid
  if (menu) {
    background(225); 
    firstLvl.display();
    secondLvl.display();
    thirdLvl.display();
  }
  else if (!menu) {
    lossCondition();
    displayGrid();
    // displayNums();

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
    if (this.purpose === level1) {
      stroke("white");
      textSize(cellWidth*0.75);
      textAlign(CENTER, CENTER);
      text("1", this.x*this.butWidth + this.butWidth/2, this.y*this.butHeight + this.butHeight/2);
    }
    if (this.purpose === level2) {
      stroke("white");
      textSize(cellWidth*0.75);
      textAlign(CENTER, CENTER);
      text("2", this.x*this.butWidth + this.butWidth/2, this.y*this.butHeight + this.butHeight/2);
    }
    if (this.purpose === level3) {
      stroke("white");
      textSize(cellWidth*0.75);
      textAlign(CENTER, CENTER);
      text("3", this.x*this.butWidth + this.butWidth/2, this.y*this.butHeight + this.butHeight/2);
    }
  }

  // Seeing if the Mouse is Over the Button
  isHover(x, y) {
    return x >= this.x - this.butWidth/2 && x <= this.x + this.butWidth/2 &&
           y >= this.y - this.butHeight/2 && y <= this.y + this.butHeight/2;
  }
}

// Making the Buttons Work
function mousePressed() {
  if (firstLvl.isHover(mouseX, mouseY) && menu) {
    grid = level1;
    menu = false;
  }
  else if (secondLvl.isHover(mouseX, mouseY) && menu) {
    grid = level2;
    menu = false;
  }
  else if (thirdLvl.isHover(mouseX, mouseY) && menu) {
    grid = level3;
    menu = false;
  }
  
  // Making Exit Button Work
  if (returnToMenu.isHover(mouseX, mouseY) && returnMenu) {
    grid = "menu";
    menu = true;
    returnMenu = false;
  }

  // Making the Game Work
  cellX = Math.floor(mouseX/cellWidth);
  cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 1 && !menu && !returnMenu) {
    grid[cellY][cellX] = 2;
  }
  if (grid[cellY][cellX] === 0 && !menu && !returnMenu) {
    grid[cellY][cellX] = "X";
  }
}

// Exit Mid-Game
function keyPressed() {
  if (keyCode === ESCAPE && !menu) {
    returnMenu = true;
  }
}

// Displaying the Numbers (WIP)
function displayNums() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      let counting;
      if (grid[y][x] === 1 || grid[y][x] === 2) {
        counting++;
      }
      else {
        nums.push(counting);
        counting = 0;
      }
    }
  }
}

// Displaying the Grid
function displayGrid() {
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
      else if (grid[y][x] === "X") {
        fill("black");
        textSize(cellWidth*0.75);
        textAlign(CENTER, CENTER);
        text(grid[y][x], x*cellWidth + cellWidth/2, y*cellHeight + cellHeight/2);
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

// Setting Loss Condition (WIP)
function lossCondition() {
  let count = 0;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === "X") {
        count++;
      }
      if (count >= 3) {
        returnMenu = true;
      }
    }
  }
}