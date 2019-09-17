let ball = {
  x : 200,
  y : 15,
  diameter : 25
};

let brett = {
  x : 200,
  y : 350,
  width: 70,
  height: 25
};

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  //rectangle
  fill(255);
  rect(mouseX, brett.y, brett.width, brett.height);

  //ball
  fill(0);
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

  ball.y = ball.y + 4;
}
