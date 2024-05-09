let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  //generate
  particles.push(new Particle(width / 2, height / 2, 30));
}

function draw() {
  background(220);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
  }

  text(particles.length, 10, 20);
}

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpd = 0;
    this.ySpd = random(-3, 3);
    this.rad = rad
    this.outOfCanvas = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkBoundaries() {
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.outofCanvas = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.rad * 2);
    pop();
  }
}