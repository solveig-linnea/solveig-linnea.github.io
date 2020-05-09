const inpPris = document.querySelector("#inpPris");
const inpRab = document.querySelector("#inpRab");
const btnRegn = document.querySelector("#btnRegn");
const divResultat = document.querySelector("#divResultat");

btnRegn.onclick = function(){
  let vekstfaktor = (1 - (Number(inpRab.value)/100)); // Finner vekstfaktoren ved å ta (100% - verdien i rabattfeltet) / 100
  let sluttpris = Number(inpPris.value) * vekstfaktor;
  divResultat.innerHTML = `Sluttpris: ${sluttpris.toFixed(2)} kr`;
}