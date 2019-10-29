//alert("Js er lastet);
//Definerer de ulike variablene
let gjett = Number(prompt("Jeg tanker på et tall mellom 0 og 20. Hvilket tall tenker jeg på?"));
let tall;
let riktig = false;
let forsok = 0;


tall = Math.floor(Math.random()*20);
while(riktig === false){
  if (gjett < tall) {
    gjett = Number(prompt("For lavt, prøv igjen"));
    forsok = forsok + 1; //Registrerer at forsøk blir brukt
  }
  else if (gjett > tall) {
    gjett = Number(prompt("Tallet er for høyt, prøv igjen"));
    forsok = forsok + 1; //Registrerer at forsøk blir brukt
  }
  else if (gjett === tall) {
    forsok = forsok + 1;//Registrerer at forsøk blir brukt
    alert("Gratulerer du vant! Du brukte " + forsok + " forsøk for på å vinne."); //Viser hvor mange forsøk som ble brukt
    riktig = true;
  }
}
