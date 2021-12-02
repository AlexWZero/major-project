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
let menu = true;
let grid = "menu";
let gridSize = 18;
let cellHeight, cellWidth;
let cellX;
let cellY;
let nums = [];
let currentLevel;
let buttonWidth = 100;
let buttonHeight = 100;
let firstLvl, secondLvl, thirdLvl;

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
  firstLvl = new Button(level1, width/5, height/2.3, buttonWidth, buttonHeight);
  secondLvl = new Button(level2, width/2.3, height/2.3, buttonWidth, buttonHeight);
  thirdLvl = new Button(level3, width/1.5, height/2.3, buttonWidth, buttonHeight);
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
    displayGrid();
    lossCondition();
    // displayNums();
  }
}

// The Button Class
class Button {
  constructor(level, x, y, butWidth, butHeight) {
    this.purpose = level;
    this.x = x;
    this.y = y;
    this.butWidth = butWidth;
    this.butHeight = butHeight;
    this.hoverColor = "grey";
    this.notHoverColor = "black";
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
    return x >= this.x && x <= this.x + this.butWidth &&
           y >= this.y && y <= this.y + this.butHeight;
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

  // Making the Game Work
  cellX = Math.floor(mouseX/cellWidth);
  cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 1 && !menu) {
    grid[cellY][cellX] = 2;
  }
  if (grid[cellY][cellX] === 0 && !menu) {
    grid[cellY][cellX] = "X";
  }
}

// Exit Mid-Game
function keyPressed() {
  if (keyCode === ESCAPE) {
    grid = "menu";
    menu = true;
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
    for (let x=0; x<gridSize[y]; x++) {
      if (grid[y][x] === "X") {
        count++;
      }
      if (count >= 3) {
        menu = true;
      }
    }
  }
}