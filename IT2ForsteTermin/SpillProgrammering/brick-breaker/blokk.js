class Blokk{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.bredde = 80;
    this.hoyde = 30;
    this.farge = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    this.poeng = 1;
  }
  tegn(){
    fill(this.farge);
    rect(this.x, this.y, this.bredde, this.hoyde);
  }
  treffBlokk(ball){
    if(ball.x + this.radius > this.x && ball.x < this.x + this.bredde && ball.y > this.y && ball.y < this.y + this.hoyde){
        //console.log("hit");
        return true;
      } else {
      return false;}
  }

}
