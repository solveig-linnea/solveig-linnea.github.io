
function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

//Tegne rektangel øverst til høyre
  if(mouseX < 200 && mouseY < height/2) {
    rect(mouseX, mouseY, 30, 50);
  }
  //Tegne sirkel øverst til venstre
  else if (mouseX > 200 && mouseY < height/2) {
    circle(mouseX, mouseY, 30);
  }
  //Tegne ellipse nede
  else {
    ellipse(mouseX, mouseY, 60, 30);
  }

}
