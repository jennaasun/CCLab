let sound1;
let sound2;

function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(220);

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y+h) {
    r = 255;
    g = 255;
    b = 0;
      if (mouseIsPressed) {
        r = 255;
        g = 0;
        b = 0;
        if (sound1.isPlaying() == false) {
          sound1.play();
        }
      }
  } else {
    r = 255;
    g = 255; 
    b = 255;
  }
  //
  push();
  rectMode(CENTER);
  fill(r,g,b);
  rect(x,y,w,h);
}


function mousePressed() {
  sound1.play();
}