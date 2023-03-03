
let circles = [];
let circleNum = 200;
let radius = 2;
let total = 8;
let count = 0;
let attempts = 0;
let maxAttempts = 5000;

function setup() {
  background(0);
  createCanvas(1200,600);
  stroke(255);
  strokeWeight(1)
  let firstCircle = new Circle(width/2, height/2, 200);
  circles.push(firstCircle);
}

function draw() {
  background(0);

  while (count < total) {
    let newC = newCircle();
    attempts++
    if (newC !=null) {
          circles.push(newC);

    }
    count++
  }
  count = 0;
  
  if (attempts > maxAttempts) {
      noLoop();
      console.log("finished");
      // return;
  }

  for (let i=0; i < circles.length; i++) {
    if (circles[i].growing) {
      if (circles[i].edges()) {
        circles[i].growing = false;
      } else {
        for (let j=0; j<circles.length; j++) {
          if (circles[i] != circles[j]) {
            let d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
          if (d - 3 < circles[i].r + circles[j].r ) {
            circles[i].growing = false;
            break;
          }
        }
      }
      }
    }

    if (circles[i].edges()) { 
      circles[i].growing = false;
    } else {
      circles[i].grow();
    }
    circles[i].show();
  }
}


function newCircle() {

  let x = random(width)
  let y = random(height)
  let valid = true;

  for (let i=0; i < circles.length; i++) {
    let d = dist(x,y,circles[i].x, circles[i].y);
    if (d < circles[i].r) {
      valid = false;
      break;
    }
  }
  
  if (valid) { 
    return new Circle(x,y, radius);
  } else {
    return null;
  }
}