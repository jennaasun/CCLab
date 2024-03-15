let x, y;
let dis;
let ifGo = false;
let topColor, bottomColor;
let stand = true; // checks if the warawara is standing
let inflate = true; // checks if the warawara is inflated
let img;
let imgWidth = 100;
let imgHeight = 100;
let eyeHeight = 11; // reference https://editor.p5js.org/stalgiag/sketches/mzpdFPhdx
let counter = 0;
let eyesClosed = false;

function preload() {
  img = loadImage("assets/fishgut.png");
}

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container");

  topColor = color(32, 34, 70);
  bottomColor = color("#5055af");
  x = width / 2;
  y = height / 2;
}

function draw() {
  gradient();
  fireflies();
  ground();

  if (ifGo) {
    y--;
  }

  if (stand) {
    drawStand(); //the warawara stands
  } else if (inflate) {
    drawInflate(); //the warawara inflates
  } else {
    creature(x + random(-2, 2), y + random(-1, 1)); //the warawara flies
  }

  if (stand && inflate == true) {
    image(img, 250, 250, imgWidth, imgHeight); //fishguts
  }
  // if (mouseIsPressed) {
  //  image(myCursor, mouseX,mouseY);
  //} else {
  //  cursor(ARROW);
  //}
  //}
}
function mousePressed() {
  dis = dist(mouseX, mouseY, x, y);

  //if mouse is pressed in area of creature
  if (dis < 400 && stand) {
    ifGo = true; // Start floating the creature
    stand = false;
  } else if (dis < 400 && inflate) {
    inflate = false;
  }
}

function gradient() {
  for (let y = 0; y < height; y++) {
    let n = map(y, 0, height, 0, 1);
    let newColor = lerpColor(topColor, bottomColor, n);
    stroke(newColor);
    line(0, y, width, y);
  }
}

function fireflies() {
  noStroke();
  fill(255, 255, 0);
  if (frameCount % 5 === 0) {
    ellipse(random(0, width), random(0, height), 10, 10);
    for (var i = 0; i < 10; i++) { }
  }
}

function ground() {
  noStroke();
  fill(31, 71, 42);
  beginShape();
  vertex(0, height);
  for (let x = 0; x < width; x += 10) {
    let y = map(noise(x * 0.1), 0, 1, height * 0.85, height);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
}

function creature(xpos, ypos) {
  push();
  translate(xpos, ypos);
  fill(255, 255, 255);
  //rightfoot
  strokeWeight(0.1);
  ellipse(40, -20, 40, 70);
  //leftfoot
  //strokeWeight(0.1);
  stroke(0, 0, 0);
  //strokeWeight(2.5);
  fill(255, 255, 255);
  beginShape();
  curveVertex(100, 50);
  curveVertex(100, 50);
  curveVertex(130, 25);
  curveVertex(160, 25);
  curveVertex(120, 80);
  curveVertex(120, 80);
  endShape();
  //right arm(left on screen)
  stroke(0, 0, 0);
  //strokeWeight(2);
  fill(255, 255, 255);
  beginShape();
  curveVertex(-40, 80);
  curveVertex(-40, 80);
  curveVertex(-110, 140);
  curveVertex(-70, 140);
  curveVertex(-10, 80);
  curveVertex(-10, 80);
  endShape();
  //circle(0, 0, 200);
  //body;
  ellipse(20, 100, 200, 200);
  //leftarm
  stroke(0, 0, 0);
  fill(255, 255, 255);
  strokeWeight(0.5);
  fill(255, 255, 255);
  beginShape();
  curveVertex(60, 120);
  curveVertex(60, 120);
  curveVertex(80, 150);
  curveVertex(100, 140);
  curveVertex(70, 100);
  curveVertex(70, 120);
  endShape();
  //eyes
  strokeWeight(2);
  fill(0);
  circle(-30, 80, 10);
  circle(30, 80, 10);
  //smile
  //strokeWeight(2);
  stroke(0, 0, 0);
  noFill();
  arc(0, 80, 100, 60, PI * 0.25, PI * 0.75);
  pop();
}

function drawStand() {
  //body
  push();
  translate(width / 2, height / 2);
  noStroke();
  fill(255, 255, 255);
  ellipse(20, 120, 200, 250);
  pop();
  //feet
  noStroke();
  fill(255, 255, 255);
  ellipse(370, 450, 40, 90);
  ellipse(470, 450, 40, 90);
  //right arm, left arm on screen
  push();
  translate(width / 2.5, height / 2.5);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  curveVertex(50, 120);
  curveVertex(50, 120);
  curveVertex(-30, 220);
  curveVertex(20, 220);
  curveVertex(150, 120);
  curveVertex(150, 120);
  endShape();
  pop();
  //left arm, right on screen
  push();
  translate(width / 2.5, height / 2.5);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  curveVertex(100, 120);
  curveVertex(100, 120);
  curveVertex(190, 220);
  curveVertex(230, 220);
  curveVertex(180, 120);
  curveVertex(180, 120);
  endShape();
  pop();
  // Eyes

  counter = counter + deltaTime;

  if (eyesClosed && counter > 200) {
    eyeHeight = 11;
    eyesClosed = false;
    counter = 0;
  } else if (counter > 2000) {
    // Close the eyes by setting eyeHeight to be small
    // and setting the eyeClosed boolean to true
    eyeHeight = 2;
    eyesClosed = true;
    // reset counter to 0 so that it can
    // start counting up to 1000 again
    counter = 0;
  }

  fill(0);
  ellipse(375, 345, 11, eyeHeight);
  ellipse(455, 345, 11, eyeHeight);
  // Mouth
  fill(218, 141, 141);
  arc(415, 360, 80, 35, 0, PI);
}

function drawInflate() {
  //body
  push();
  translate(width / 2, height / 2);
  noStroke();
  fill(255, 255, 255);
  ellipse(20, 120, 200, 200);
  pop();
  //feet
  noStroke();
  fill(255, 255, 255);
  ellipse(370, 450, 40, 90);
  ellipse(470, 450, 40, 90);
  //right arm, left arm on screen
  push();
  translate(width / 2.5, height / 2.5);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  curveVertex(50, 120);
  curveVertex(50, 120);
  curveVertex(-30, 220);
  curveVertex(20, 220);
  curveVertex(150, 120);
  curveVertex(150, 120);
  endShape();
  pop();
  //left arm, right on screen
  push();
  translate(width / 2.5, height / 2.5);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  curveVertex(100, 120);
  curveVertex(100, 120);
  curveVertex(190, 220);
  curveVertex(230, 220);
  curveVertex(180, 120);
  curveVertex(180, 120);
  endShape();
  pop();
  // Eyes
  fill(0);
  ellipse(375, 345, 11, 11);
  ellipse(455, 345, 11, 11);
  // Mouth
  fill(218, 141, 141);
  ellipse(415, 380, 15, 20);
}
