/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new polarDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class polarDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.color = "white";
    this.colorEyesNose = "blue";
    this.colorMouth = [218, 141, 141];
    this.colorLeaves = [56, 118, 29];
    this.colorOrange = [249, 127, 73];
    this.orangeY = -66;
    this.orangeW = 23;
    this.orangeH = 19;
    this.ySpd = 4;
    this.eyesY = -69;
    this.leavesY = -53;
    this.leftfootX = 0;
    this.leftarm = 0;
    this.head = 10;





    //..
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //ex. this.x = this.x + 2;
    //this.x += this.speed;
    //this. y += this.y -1;
    //this.y += Math.sin(this.x * 0.1) * 5;

    this.orangeY += this.ySpd;

    if (this.orangeY < -66 || this.eyesY < -69 || this.leavesY < -53) {
      this.ySpd -= 0.5;
    } else if (this.orangeY >= -76 || this.eyesY >= -73 || this.leavesY >= -43) {
      this.ySpd += 1;

    }
    this.eyesY += this.ySpd;
    this.leavesY += this.ySpd;

    this.angle = sin(frameCount * 0.1) * radians(4);
    this.angle2 = sin(frameCount * 0.06) * radians(2);
    this.leftfootX = sin(frameCount * 0.1) * radians(7);
    this.leftarm = sin(frameCount * 0.4) * radians(40);

    //  if (frameCount % 30 == 0) {
    //    this.r = random(0, 255);
    // } else 
    //    this.r = 255 - this.r;




  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //leaves
    fill(this.colorLeaves);
    beginShape();
    curveVertex(0, this.leavesY);
    curveVertex(-3, this.leavesY - 10);
    curveVertex(-5, this.leavesY - 26);
    curveVertex(-10, this.leavesY - 22);
    curveVertex(-4, this.leavesY);
    curveVertex(-2, this.leavesY);
    endShape();
    fill(this.colorLeaves);
    beginShape();
    curveVertex(-5, this.leavesY - 7);
    curveVertex(0, this.leavesY - 17);
    curveVertex(5, this.leavesY - 32);
    curveVertex(15, this.leavesY - 32);
    curveVertex(4, this.leavesY - 7);
    curveVertex(-1, this.leavesY - 7);
    endShape();

    //orange
    push();
    fill(this.colorOrange);
    ellipse(0, this.orangeY, this.orangeW, this.orangeH);
    //orangeeyes
    fill(0, 0, 0);
    circle(-4, this.eyesY, 2);
    fill(0, 0, 0);
    circle(4, this.eyesY, 2);
    pop();

    //head
    push();
    rotate(this.angle);
    stroke(this.color);
    fill(this.color);
    beginShape();
    curveVertex(-37, 10);
    curveVertex(-37, 10);
    curveVertex(-36, 10);
    curveVertex(-26, -15);
    curveVertex(-18, -50);
    curveVertex(0, -57);
    curveVertex(18, -50);
    curveVertex(26, -15);
    curveVertex(36, 10);
    curveVertex(36, 10);
    endShape();
    pop();


    //ears
    push();
    rotate(this.angle);
    stroke(this.color);
    fill(this.color);
    beginShape();
    curveVertex(-21, -40);
    curveVertex(-21, -40);
    curveVertex(-25, -56);
    curveVertex(-22, -61);
    curveVertex(-16, -62);
    curveVertex(-10, -57);
    curveVertex(-10, -57);
    endShape();
    fill(this.color);
    beginShape();
    curveVertex(21, -43);
    curveVertex(21, -43);
    curveVertex(25, -45);
    curveVertex(23, -55);
    curveVertex(23, -60);
    curveVertex(19, -59);
    curveVertex(13, -56);
    curveVertex(13, -56);
    endShape();
    pop();

    //eyes
    push();
    stroke(this.color);
    rotate(this.angle);
    fill(this.colorEyesNose);
    circle(-10, -43, 5);
    fill(this.colorEyesNose);
    circle(10, -43, 5);
    pop();

    //nose
    push();
    rotate(this.angle);
    stroke(this.color);
    fill(this.colorEyesNose);
    ellipse(0, -38, 20, 8);
    fill(this.color);
    ellipse(0, -39, 7, 1);
    pop();

    //mouth
    push();
    rotate(this.angle);
    noStroke();
    fill(this.colorMouth);
    arc(0, -33, 10, 10, 0, PI);
    pop();

    //body
    push();
    translate(0, 70);
    rotate(this.angle);
    noStroke();
    fill(this.color);
    ellipse(0, -40, 90, 95);
    pop();

    //shadow
    push();
    rotate(this.angle);
    noStroke();
    fill(204, 204, 204);
    arc(0, -20, 30, 8, 0, PI);
    pop();

    //leftarm
    push();
    translate(25, 0);
    rotate(this.leftarm);
    fill(this.color);
    noStroke();
    ellipse(30, 0, 60, 20);
    pop();

    //rightarm+bottle
    push();
    translate(-5, 0);
    rotate(this.angle);
    fill(this.color);
    //bottle
    noStroke();
    fill(255, 133, 3);
    rect(-10, 8, 12, 25);
    rect(-6.5, 0, 5, 15);
    triangle(-6.5, 0, -6.5, 8, -10, 8);
    triangle(-1.5, 0, -1.5, 8, 2, 8);
    strokeWeight(0.5);
    stroke('black');
    fill(this.color);
    rect(-7.5, -4, 7, 4);
    rect(-9.5, 33.5, 11, 2);
    noStroke();
    ellipse(-1.5, 29, 5, 5);
    ellipse(-5, 24, 3, 3);
    ellipse(-1, 20, 2, 2);
    fill(this.color);
    stroke(0, 0, 0);
    strokeWeight(0.5);
    ellipse(-23, 16, 40, 20);
    pop();

    //rightfoot
    push();
    translate(-10, 0);
    rotate(this.rightfootX);
    fill(this.color);
    noStroke();
    ellipse(-5, 80, 25, 40);
    arc(-5, 100, 30, 30, PI, TWO_PI, PIE);
    stroke(0);
    strokeWeight(0.5);
    line(-10, 100, -10, 95);
    line(0, 100, 0, 95);

    //leftfoot
    push();
    translate(10, 0);
    rotate(this.leftfootX);
    noStroke();
    fill(this.color);
    ellipse(5, 80, 25, 40);
    arc(5, 100, 30, 30, PI, TWO_PI, PIE);
    stroke(0);
    strokeWeight(0.5);
    line(10, 100, 10, 95);
    line(0, 100, 0, 95);
    pop();

    //text
    textSize(50);
    stroke('blue');
    strokeWeight(2);
    fill(this.r, this.g, this.b);
    text('北', -90, -50);
    fill(255 - this.r, 255 - this.g, 255 - this.b);
    text('冰', -90, 15);
    fill(255 + this.r, 255 + this.g, 255 + this.b);
    text('洋', -90, 80);

    pop();





    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    pop();
  }


}


/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/