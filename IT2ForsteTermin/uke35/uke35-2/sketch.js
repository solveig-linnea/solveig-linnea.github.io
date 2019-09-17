let xPosisjon=200;
let yPosisjon=200;

function setup() {
  // put setup code here
  createCanvas(600, 500);

}

function draw() {
  // put drawing code

  //Oppdatere x posisjon og y posisjon
  xPosisjon = xPosisjon + 1;
  yPosisjon = yPosisjon + 1;
  //0 = 1

  //Tegner bakgrunnsfarge
  background(mouseX,mouseY,100);
  //Tegner og farger bakken
  fill(110, 224, 119);
  rect(0,200,600,300);
  //Tegner og farger hus
  fill(255,255,255);
  rect(70,150,130,100);
  //Tegner og farger pipe
  fill(186, 178, 177);
  rect(75,70,25,50);
  //tegner og farger tak + dør
  fill(0, 0, 55);
  triangle(50, 150, 130, 60, 220, 150);
  rect(120,190,35,60);
  //tegner og farger sirkelene og ellipsene
  fill(222, 250, 248);
  circle(90, 190, 30);
  circle(180, 190, 30);

  ellipse(xPosisjon,yPosisjon,50,50);
}
