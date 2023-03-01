let inc = 0.05;
let scl = 12;
let cols, rows;
let yoff = 0;
let zoff = 0;

let fr;

function setup() {
  createCanvas(800, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('')
}

function draw() {
  let yoff = 0;
let zoff = 0;
  background(0);
  randomSeed(10);
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let r = noise(xoff, yoff, zoff) * 255;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;
      stroke(255)
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);

      pop();
      fill(r);
      // rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
    zoff += 0.001
  }

  fr.html(floor(frameRate()))
}