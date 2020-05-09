const inpVare = document.querySelector("#inpVare");
const inpPris = document.querySelector("#inpPris");
const inpAntall = document.querySelector("#inpAntall");
const btnLeggTil = document.querySelector("#btnLeggTil");
const divListe = document.querySelector("#divListe");
const btnSlett = document.querySelector("#btnSlett");
const divTotalsum = document.querySelector("#divTotalsum");


let varer = []; // En array som skal holde alle varene

btnLeggTil.onclick = function(){
  leggTilVare();
  skrivUtVarer();
  oppdaterTotalsum();
}
btnSlett.onclick = function(){
  varer.pop() // .pop() sletter siste element i en array, kunne også brukt varer.splice(varer.length - 1, 1);
  skrivUtVarer();
  oppdaterTotalsum();
}



function leggTilVare(){
  let nyVare = {
    navn: inpVare.value,
    pris: Number(inpPris.value),
    antall: Number(inpAntall.value),
  }
  varer.push(nyVare);
}

function skrivUtVarer(){
  divListe.innerHTML = ``; // Sletter innholdet i listen
  for(let vare of varer){
    divListe.innerHTML += `
      <div>
        - ${vare.navn}, pris: ${vare.pris}, antall: ${vare.antall}
      </div>
    `;
  }
}

function oppdaterTotalsum(){
  let totalsum = 0;
  for(let vare of varer){
    let varepris = vare.antall * vare.pris;
    totalsum += varepris;
  }
  divTotalsum.innerHTML = `Totalsummen er ${totalsum} kr.`;
}
