let inc = 0.08;
let scl = 20;
let cols, rows;
let zoff = 0;
let particles = [];
let fr;

let flowfield = [];

function setup() {

  background(0);
  createCanvas(2000, 1000);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

}

function draw() {
  background(0);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 3;
      let v = p5.Vector.fromAngle(angle);
      //v.setMag(5);
      flowfield[index] = v;
      xoff += inc;
      stroke(255);
      strokeWeight(1);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += 0.1;
    zoff += 0.0003;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()))
}