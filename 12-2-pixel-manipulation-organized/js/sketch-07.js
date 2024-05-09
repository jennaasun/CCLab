let letters = [".", ",", "-", "!", ";", "+", "*", "#", "$", "@",]

let cam;

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(220);

  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(0);

  //image(cam, 0, 0);
  cam.loadPixels();

  // now we can access the cam.pixels and img.pixels arrays!

  let gridSize = 10; //floor(map(mouseX, 0, width, 10, 40));
  for (let y = 0; y < cam.height; y += gridSize) {
    for (let x = 0; x < cam.width; x += gridSize) {
      // each pixel's index
      let index = (x + y * cam.width) * 4;

      // get color data from each pixel
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];

      let avg = (r + g + b) / 3;

      let letterIndex = round(map(avg, 0, 255, 0, 9));
      fill(255);
      noStroke();
      text(letters[letterIndex], x + 10, y + 20);
    }
  }
}