const inpPris = document.querySelector("#inpPris");
const inpRabatt = document.querySelector("#inpRabatt");
const btnRegnUt = document.querySelector("#btnRegnUt");
const divResultat = document.querySelector("#divResultat");

btnRegnUt.onclick = regnUt;

function regnUt(){
  let pris = Number(inpPris.value);
  let rabatt = Number(inpRabatt.value);
  let vekstfaktor = (100 - rabatt) /100;
  let sum = pris * vekstfaktor;
  divResultat.innerHTML = `Sluttpris: ${sum}`;
  if(pris < 0 || rabatt > 100){
    divResultat.innerHTML = `Det kan ikke være mer enn 100% rabatt eller at noe koster under 0 kr fra straten av`;

  }
//Legg på begrensininger og brukervennlighet
}
