let sirkel = {
  diameter: 30
};

function setup() {
  // put setup code here
  createCanvas(600, 600);

}

function draw() {
  // put drawing code here
  background(220);
//Oppgave 1
  ellipse(mouseX, mouseY, sirkel.diameter);
  if (mouseX > 400) {
    fill(255, 0, 0);
  }
  else {
    fill(0, 0, 255);
  }



}
