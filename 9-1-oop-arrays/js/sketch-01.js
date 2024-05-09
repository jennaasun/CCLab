let names = [
  "Moon",
  "Belle",
  "Ruby",
  "Trisha",
  "Jenna",
];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  // array functions
  // array.push( element );       // add an element to the end
  // array.splice( index, 1 );    // remove an element at the index

  // to add!
  //names[6] = "Sean";
  names.push("Sean");
  names.push("Will");
  names.push("Cicci");
  names.push("Torico");

  // to remove!
  names.splice(0, 1); // (index, how many elements to remove)
}

function draw() {
  let firstIndex = 0;
  let lastIndex = names.length - 1;
  text(names[lastIndex], 50, 100);

  for (let i = 0; i < names.length; i++) {
    let x = 120;
    let y = 100 + i * 20; // variation
    text(i + ": " + names[i], x, y);
  }
}