const knapp = document.querySelector('#knapp');
const divResultat = document.querySelector('#divResultat');
const imgBilde = document.querySelector('#imgBilde');


knapp.onclick = tilfeldigPerson;

function tilfeldigPerson(){
  let alder = Math.floor(Math.random()*70) + 1; // Tilfeldig tall mellom 1 og 70
  if(alder < 15){
    divResultat.innerHTML = `${alder} år. Ikke for smårollinger, minst 15 år!`
    imgBilde.src = "../vedlegg/ung.jpg"
  }
  else if (alder > 60) {
    divResultat.innerHTML = `${alder} år. Ikke for gamlinger, maks 60 år!`
    imgBilde.src = "../vedlegg/gammel.jpg";
  }
  else{
    divResultat.innerHTML = `${alder} år! Gratulerer, du er akkurat passe gammel!`
    imgBilde.src = "../vedlegg/passe.jpg";
  }
}
