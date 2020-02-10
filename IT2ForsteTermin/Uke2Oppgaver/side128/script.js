//Oppgave 1
//const btnTrykk = document.querySelector("#btnTrykk");
//btnTrykk.onclick = function() {
//  document.write("Du trykket på meg!");
//}
//Oppgave 2
/*
const btnRegistrer = document.querySelector("#btnRegistrer");
const divAntall = document.querySelector("#divAntall");
btnRegistrer.onclick = registrerElev;

function registrerElev(){
  let sum = 0;
  if(sum < 300){
    sum += 1;
  }
  else if(sum >= 300){
    document.write("Det er 300 elever i lokalet");
  }
  divAntall.innerHTML = `
  SUM: ${sum} elever.
  `
}
*/
//Oppgave 3
const btnBilde = document.querySelector("#btnBilde");
const divBilde = document.querySelector("#divBilde");
btnBilde.onclick = function(){
  divBilde.innerHTML = `<img src = "bilde.JPG">`;
}
