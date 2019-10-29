function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(220);

}

function draw() {
  // put drawing code here
  for (let x = 10, y = 10; x < 1000; x = x + 10, y = y +10) {
    circle(x, y, 25);
  }



}
