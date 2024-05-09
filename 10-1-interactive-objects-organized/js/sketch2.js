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

  btn = new Button(width / 2, height / 2, 80);

}

let btn;

function draw() {
  background(220);

  btn.display();
}

class Button {
  constructor(x, y, rad) {
    this.x = 200;
    this.y = 200;
    this.rad = 100;
    //
    this.r = 255;
    this.g = 255;
    this.b = 0;
  }


  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      //in
    }
  } else {
    //out
  }
  display() {
    circle(this.x, this.y, this.rad * 2);
  }
}


function mousePressed() {
  sound1.play();
}