let noteIndex = 0;
const notes = [
  261.63,  // C4
  293.66,  // D4
  329.63,  // E4
  349.23,  // F4 
  392.00,  // G4
  440.00,  // A4
  493.88,  // B4
  523.25,  // C5
  587.33,  // D5
  659.25,  // E5
  698.46,  // F5
  783.99,  // G5
  880.00,  // A5
  987.77,  // B5
  1046.50, // C6
  1174.66, // D6
  1318.51, // E6
  1396.91, // F6
  1567.98, // G6
  1760.00, // A6
  1975.53, // B6
  2093.00  // C7
];

let buttons = [];

function setup() {
  let canvas = createCanvas(700, 300);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < 50; i++) {
    let randomIndex = floor(random(notes.length));
    let noteFreq = notes[randomIndex];
    buttons.push(new Button(random(width), random(height), random(3, 20), noteFreq));
  }
}

function draw() {
  background(50);

  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.move();
    btn.reappear();
    btn.vibrate();
    btn.checkMouse();
    btn.display();
  }
}

///// CLASS /////

class Button {
  constructor(initX, initY, rad, freq) {
    this.x = initX;
    this.y = initY;
    this.xSpeed = random(-0.1, 0.1);
    this.ySpeed = random(-0.1, 0.1);
    this.rad = rad;
    //
    this.osc = new p5.Oscillator('sine');
    this.freq = freq;
    this.amp = 0.0;
    //
    this.init();
  }
  init() {
    this.osc.freq(this.freq, 0.05);
    this.osc.amp(this.amp);
    this.osc.start();
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  reappear() {
    if (this.x < 0) {
      this.x = width;
    }
    else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    else if (this.y > height) {
      this.y = 0;
    }
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    this.amp = map(distance, 0, this.rad, 1.0, 0.0, true);
  }
  vibrate() {
    let sinValue = sin(frameCount * 0.25); // -1 to 1
    let ampValue = map(sinValue, -1, 1, this.amp * 0.5, this.amp, true);
    this.osc.amp(ampValue, 0.05);
  }
  display() {
    push();
    translate(this.x, this.y);
    let brightness = map(this.amp, 0.0, 1.0, 0, 255);
    fill(brightness);
    noStroke();
    circle(0, 0, this.rad * 2);
    pop();
  }
}