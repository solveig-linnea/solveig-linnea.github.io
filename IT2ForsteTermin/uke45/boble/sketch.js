class Boble{
  constructor(){
    this.x = 200,
    this.y = 200,
    this.radius = 25;
  }
  tegn(){
    circle(this.x, this.y, this.radius)
  }
  flytt(){
    this.x += 1;
  }
}

let boble1 = new Boble(100, 200);
let boble2 = new Boble(300, 100);


function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  boble1.flytt();
  boble1.tegn();
  boble2.tegn();

}
