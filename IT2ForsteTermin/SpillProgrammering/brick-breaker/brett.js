class Brett{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.bredde = 150;
    this.hoyde = 30;
    this.farge = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    this.retning = 0;
  }
  tegn(){
    fill(this.farge);
    rect(this.x, this.y, this.bredde, this.hoyde);
  }
  flytt(){
    this.x += (this.retning*7);
    if(this.x < 0){
      this.x = 0;
    } else if(this.x + this.bredde > width){
      this.x = width - this.bredde;
    }
  }
  treffBrett(ball){
    if(ball.x > this.x && ball.x < this.x + this.bredde && ball.y > this.y && ball.y < this.y + this.hoyde){
      console.log("treff");
      return true;
    } else{
      return false;
    }
  }
}
