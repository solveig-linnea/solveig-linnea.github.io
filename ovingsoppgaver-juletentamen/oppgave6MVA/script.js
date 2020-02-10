const inpVerdi = document.querySelector("#inpVerdi");
const btnRegn = document.querySelector("#btnRegn");
const divResultat = document.querySelector("#divResultat");

btnRegn.onclick = regnMva;

function regnMva(){
  let verdi = Number(inpVerdi.value);
  if(verdi >= 350){
    verdi = verdi * 1.25 + 158;
  }
  divResultat.innerHTML = `
    Varens totalverdi: ${verdi} kr.
  `
}
