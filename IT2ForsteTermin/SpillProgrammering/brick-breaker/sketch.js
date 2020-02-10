let brett;
let ball;
let blokker = [];
let status;
let score = 0;

function setup() {
  status = 'spiller ikke';
  createCanvas(800, 470);
}
function resetSketch(){
  status = 'spiller';
  brett = new Brett(width/2, height - 40);
  ball = new Ball();
  for(let i = 0; i <= 10; i += 1){
    for(let j = 0; j <= 5; j += 1){
      blokker.push(new Blokk(i*80, j*30));
    }
  }
}

function draw() {
  // put drawing code here
  if(status === 'spiller ikke'){
    textSize(32);
    fill(255);
    text('Trykk ENTER for å starte å spille', 150, height/2);
  }
  else if(status === 'spiller'){
  background(0);
  for(let i = blokker.length -1; i > 0; i -= 1){
    let avstand = dist(ball.x, ball.y, blokker[i].x, blokker[i].y);
    if(avstand < (blokker[i].bredde + blokker[i].hoyde + ball.radius) / 2){
      score += blokker[i].poeng;
      blokker.splice(i,1);
      ball.snu();
    }
    else{
      blokker[i].tegn();
    }
}
  brett.tegn();
  brett.flytt();
  if(brett.treffBrett(ball)){
    ball.snu();
  }
  ball.tegn();
  ball.sprettSide();

  textSize(32);
  fill(255);
  text(`Score: ${score}`, width - 200, 50);
  if(ball.underBunnen()){
    status = 'tapte';
    score = 0;

  }
  if(blokker.lenght === 0){
    status = 'vant';
  }
} else{
  textSize(100);
  status === 'tapte' ? fill('#fa0505') : fill('#0df005');
  text(`Du ${status}!!!`, width / 2 -225, height / 2);
  textSize(50);
  fill(255);
  text('Trykk R ', 300, 400);
}
}
function keyPressed(){
  if(keyCode === 82){
    resetSketch(); //Restarter spillet hvis man trykker 'R'
  }
  else if(keyCode === 13){
    status = 'spiller';
    resetSketch();
  }
  else if(keyCode === 39){
    brett.retning = 1;
  }
  else if(keyCode === 37){
    brett.retning = -1;
  }
}
function keyReleased(){
  if(keyCode === 39 || keyCode === 37){
    brett.retning = 0;
  }
}
