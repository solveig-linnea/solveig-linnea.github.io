function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

//Oppgave a, tegne 25 sirkeler ved siden av hverandre
  for(let i = 1; i <= 25; i += 1){
    circle(i*15, 50, 10);
  }
//Oppgave b, skrive ut alle partall mellom 2 og 30
for(let i = 2; i <= 30; i += 1){
  if(i % 2 === 0){
    console.log(i);
    }
  }
}
