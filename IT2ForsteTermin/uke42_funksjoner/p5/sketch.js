let figur = {
  x: 50,
  y: 100,
  xFart: 3,
  yFart: 4
}

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  flyttFigur();
  tegnFigur();
  snuFigur();

  function snuFigur() {
    if(figur.x > width || figur.x < 0){
      figur.xFart *= -1;
    }
    if(figur.y > width || figur.y < 0){
      figur.yFart *= -1;
    }
  }

  function flyttFigur(){
    figur.x += figur.xFart;
    figur.y += figur.yFart;
  }
  function tegnFigur() {
    fill(200,100,150);
    circle(figur.x,figur.y,20);
  }
}
