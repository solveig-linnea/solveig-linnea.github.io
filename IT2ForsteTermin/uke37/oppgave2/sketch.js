let x = 0;
let y = 0;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(100,150,200);


}

function draw() {
  // put drawing code here

  x = random(0,width);
  y = random(0, height);

  if (x > width/2 && y > height/2) {
    ellipse(x, y, 20, 30);
  }
  else if (x > width/2 && y < height/2) {
    rect(x, y, 10, 15);
  }
  else if (x < width/2 && y > height/2) {
    triangle(x, y, x+20, y, x+10, y-20);
  }
  else {
    circle(x, y, 15);
  }
}
