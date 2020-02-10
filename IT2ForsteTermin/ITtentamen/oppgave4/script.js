const inpVare = document.querySelector("#inpVare");
const inpPris = document.querySelector("#inpPris");
const inpAntall= document.querySelector("#inpAntall");
const btnLeggTil = document.querySelector("#btnLeggTil");
const divListe = document.querySelector("#divListe");
const btnSlett = document.querySelector("#btnSlett");

let handleliste = [];
let sum = 0;

btnLeggTil.onclick = leggTil;
btnSlett.onclick = slettSiste;

function leggTil(){
  handleliste.push({
    vare: inpVare.value,
    pris: Number(inpPris.value),
    antall: Number(inpAntall.value)
  });


  divListe.innerHTML = ``;
  for(let del of handleliste){
    for(let i = 0; i < handleliste.lenght; i++){
      let verdi = del.pris * del.antall;
      sum = sum + verdi;
    }
    console.log(sum);
    divListe.innerHTML += `<li>${del.vare}, Pris: ${del.pris}, Antall: ${del.antall}</li>`;

    //divListe.innerHTML = `Totalsummen er: ${sum}`;
  }
}
function slettSiste(){
  handleliste.pop();
}
