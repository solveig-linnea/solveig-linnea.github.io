function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  let x = 0;
  let y = 0;

  while(x < 300) {
    circle(x,10,25);
    x = x + 10;
  }
  while(y < 300){
    circle(10,y,25);
    y = y + 10;
  }

}
//Oppgave 2

let gange = 1;
while(gange <= 20){
  console.log(gange*8);
  gange = gange + 1;
}
