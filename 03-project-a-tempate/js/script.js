console.log("test");

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
}

function draw() {
    background(random(255));
}