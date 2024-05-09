// code adapted from happy coding https://happycoding.io/tutorials/p5js/animation/random-walker
// original artist: Kevin Workman
let x;
let y;
let x2;
let y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(255, 0, 0); //red
  strokeWeight(4);
  x = 0; //left side of canvas
  y = height / 2; //centered
  x2 = windowWidth; //right side of canvas
  y2 = height / 2 - 100;
}

function draw() {

  let nextX = x + 1; //draws towards the right
  let nextY = y + random(-5, 5);
  let nextx2 = x2 - 1; //draws towards the left
  let nexty2 = y2 + random(-5, 5);

  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);
  nextx2 = constrain(nextx2, 0, width);
  nexty2 = constrain(nexty2, 0, height);


  line(x, y, nextX, nextY);
  line(x2, y2, nextx2, nexty2);

  x = nextX;
  y = nextY;

  x2 = nextx2;
  y2 = nexty2;

}