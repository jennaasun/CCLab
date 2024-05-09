let ballA, ballB;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  ballA = new Ball(100, 200, 50);
  ballB = new Ball(400, 200, 120);
}

function draw() {
  background(220);

  ballA.move();
  ballA.display();

  //ballB.move();
  ballB.display();
}

class Ball {
  constructor(startX, startY, startDia) {
    this.x = startX;
    this.y = startY;
    this.dia = startDia;
  }
  move() {
    this.x += 0.2;
    this.y += 0.1;
  }
  display() {
    push();
    circle(this.x, this.y, this.dia);
    pop();
  }
}