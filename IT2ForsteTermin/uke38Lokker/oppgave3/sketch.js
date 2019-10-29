function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  //Oppgave 3
  let x = 10;
  let x2 = 10;
  let y = 10;
  let y2 = 25;

  while(y < 400){
    line(x,y,x2,y2)
    x = x + 10;
    y = y + 10;
    x2 = x2 + 10;
    y2 = y2 + 10;
  }


}
