let balls = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(255);

  for (let i = 0; i < 100; i++) {
    let x = width / 2;
    let y = height;
    let dia = random(1, 5);
    balls.push(new Ball(x, y, dia));
  }
}

function draw() {
  //background(255, 10);
  background(0, 50);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i]; // get each ball
    b.move();
    b.zigzag();
    b.fall();
    b.checkBottom();
    b.display();
  }
}

//

class Ball {
  constructor(startX, startY, startDia) {
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-0.1, 0.1);
    this.ySpd = random(-6, -5);
    this.dia = startDia;
    //
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  fall() {
    this.ySpd += 0.05;
  }
  zigzag() {
    this.x += random(-1, 1);
  }
  checkBottom() {
    if (this.y > height) {
      this.ySpd = random(-6, -5);
    }
  }
  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
}