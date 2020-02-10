
class Boble{
  constructor(){
    this.x = 200,
    this.y = 300,
    this.radius = 25
  };

  tegn(){
    circle(this.x, this.y, this.radius);
  };

  beveg(){
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
}

let bobler = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 40; i++) {
  bobler[i] = new Boble();
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 40; i++) {
  bobler[i].tegn();
  bobler[i].beveg();
  }
}
