function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(0);
  strokeWeight(4);
  stroke(255);

  let x = 0;
  let radius = 20;
  while (x <= width) {
    fill(0,255,255);
    ellipse(x, 40, radius, radius);
    x += 50;
  }

  for (let x = 0; x <= width; x += 50) {
    fill(255,255,0);
    ellipse(x, 300, radius, radius);
  }

  let side = 150;
  let xPosisjon = 100;
  let yPosisjon = 100;

  while (side > 0) {
    fill(247,27,210);
    rect(xPosisjon, yPosisjon, side, side);
    stroke(0);
    xPosisjon += 10;
    yPosisjon += 10;
    side = side - 20;
  }

}
