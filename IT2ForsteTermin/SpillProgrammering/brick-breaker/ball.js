class Ball {
  constructor(){
    this.x = Math.random() * width/2;
    this.y = 225;
    this.radius = 25;
    this.farge = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    this.fartx = 4;
    this.farty = 4;
  }
  tegn(){
    fill(this.farge);
    circle(this.x, this.y, this.radius);
    this.x = this.x + this.fartx;
    this.y = this.y + this.farty;
  }
  snu(){
    this.farty *= -1;
  }
  snu2(){
    this.fartx *= -1;
  }
  sprettSide(){
  if(this.y <= 0){
    ball.snu();
  } else if (this.x + this.radius >= width || this.x <= 0) {
      ball.snu2();
    }
  }
  underBunnen(){
    return this.y - this.radius > height;
  }
}
