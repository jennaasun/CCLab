let circles = []; // array of Jitter objects

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 250; i++) {
        circles.push(new Jitter());
    }
}

function draw() {
    background(255, 228, 196);

    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].display();
    }
}


// Jitter class
class Jitter {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = 50;
        this.speed = 2;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}