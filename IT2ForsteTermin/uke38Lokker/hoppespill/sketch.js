let figur = {
  x: 50,
  y: 50,
  xFart: 0,
  yFart: 3,
  hoyde: 25,
  bredde: 25,
  hopp: 50
}
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

  figur.x = figur.x + figur.xFart;
  figur.y = figur.y + figur.yFart;

  if(figur.y > height){
    text("Du er død", width/2, height/2);
    noLoop();
  }

  rect(figur.x, figur.y, figur.bredde, figur.bredde);

}

window.onkeydown = hopp;



function hopp(event) {
  if(event.key ==="Space"){
    figur.y = figur.y - figur.hopp;
  }
  else if (event.key === "Enter") {
    location.reload();
  }
}
