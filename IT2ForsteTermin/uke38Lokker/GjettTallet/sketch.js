let gjett = Number(prompt("Hvilket tall tenker jeg på?"));
let tall;
let riktig = false;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  tall = Math.floor(random(0,101));
  while(riktig === false){
    if(gjett > 100 || gjett < 0){
      gjett = Number(prompt("Tallet må være mellom 0 og 100!"));
    }
    else if(gjett < tall){
      gjett = Number(prompt("For lavt, prøv igjen"));
    }
    else if (gjett > tall) {
      gjett = Number(prompt("For høyt, prøv igjen"));
    }
    else if (gjett === tall) {
      alert("Gratulerer du vant!")
      riktig = true;
    }
    else{
      gjett = Number(prompt("Skriv tall mellom 0 og 100! Ikke prøv på noe annet"));
    }
  }
}

function draw() {
  // put drawing code here
  background(220);
}
