
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  //background(220);
  //tegnGulSirkel(100, 30, 10);
  //tegnGulSirkel(20, 100, 40);
  //tegnGulSirkel(70, 70, 5);

}

function tegnGulSirkel(x, y) {
  fill("yellow");
  circle(x, y, 50);
}
function mousePressed() {
  tegnGulSirkel(mouseX, mouseY);
}
