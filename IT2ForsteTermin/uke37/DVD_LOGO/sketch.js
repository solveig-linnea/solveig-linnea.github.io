let x;
let y;

let xspeed;
let yspeed;


function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  xspeed = 5;
  yspeed = 5;
}

function draw() {
  // put drawing code here
  background(0);
  rect(x, y, 80, 60);
  //Tegn dvd logo
  //image(dvd, x, y, 80, 60);

  x = x + xspeed;
  y = y + yspeed;

  //Hvordan gjøre at sirkelne snur ved kanten
  if (x + 80 == width || x == 0) {
    xspeed = xspeed * -1;
  }

  if (y + 60 == height || y == 0) {
    yspeed = yspeed * -1;
  }

}
