const btn2middager = document.querySelector("#btn2middager");
const btn3middager = document.querySelector("#btn3middager");
const imgMiddag = document.querySelector("#imgMiddag");

const inpAntall = document.querySelector("#inpAntall");
const pTotalpris = document.querySelector("#pTotalpris");

const inpNavn = document.querySelector("#inpNavn");
const inpAdresse = document.querySelector("#inpAdresse");
const btnSend = document.querySelector("#btnSend");
const app = document.querySelector(".app");

let antallMiddager = 0;
let bilder = ["matkasse2.png","matkasse3.png"];

btn2middager.onclick = function(){
  velgAntall(2); // Må ha denne i en egen funksjon for å kunne sende inn 2 i funksjonen
}

btn3middager.onclick = function(){
  velgAntall(3);
}
inpAntall.onkeyup = oppdaterPris;

//ES6-måten: btn3middager.onclick = () => velgAntall(3);


function velgAntall(n){
  antallMiddager = n;
  imgMiddag.src = bilder[n - 2];
  oppdaterPris();
}

function oppdaterPris(){
  let antall = Number(inpAntall.value);
  if(antall > 15 || antall < 1){
    pTotalpris.innerHTML = `Ugyldig antall personer`;
  }
  else{
    let totalpris = antallMiddager * antall;
    pTotalpris.innerHTML = `Totalpris: ${totalpris}kr`;
  }
}

btnSend.onclick = function(){
  app.innerHTML = `
    <h3>
      Bestilling sendt!
    </h3>
    <p>
      Antall middager: ${antallMiddager}
    </p>
    <p>
      Antall personer: ${Number(inpAntall.value)}
    </p>
    <p>
      Totalpris: ${antallMiddager * Number(inpAntall.value)}
    </p>
    <p>
      Navn: ${inpNavn.value}
    </p>
    <p>
      Adresse: ${inpAdresse.value}
    </p>
  `;
}