
function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(255);

}

function draw() {
  // put drawing code her
  let nyX = map(mouseX,0,500,0,100);

  circle(mouseX,mouseY,nyX);
  console.log(mouseX);
  if (mouseIsPressed) {
    fill(random(0,255),random(0,255),random(0,255));
  }
}
