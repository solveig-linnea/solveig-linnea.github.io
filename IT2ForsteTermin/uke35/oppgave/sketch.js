let xPosisjon=30;
function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  xPosisjon = xPosisjon + 1;


  background(220);
  rect(xPosisjon,20,20,20);
  rect(300,xPosisjon*3,30,15);
  rect(xPosisjon*4,90,40,10);
  rect(xPosisjon*5,120,40,20);
  rect(xPosisjon*2,160,20,20);
}
