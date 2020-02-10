const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");
const inpAntall = document.querySelector("#inpAntall");
const btnVis = document.querySelector("#btnVis");
const imgMiddag = document.querySelector("#imgMiddag");
const divInfo = document.querySelector("#divInfo");
const personInfo = document.querySelector("#personInfo");
const btnBekreft = document.querySelector("#btnBekreft");


const middager = {
  "to": {
    antall: 2,
    bilde: "../vedlegg/matkasse2.png"
  },
  "tre": {
    antall: 3,
    bilde: "../vedlegg/matkasse3.png"
  }
};

let valgtMiddag = "";
btnVis.onclick = visKasse;

function visKasse(){
  let antall = Number(inpAntall.value);
  if(inp2.checked){
    valgtMiddag = "to";
    if(antall < 5){
      let pris = 80 * antall * 2;
      divInfo.innerHTML = `Prisen blir ${pris} kr. <br>
      <img src="../vedlegg/matkasse2.png">
      <button id="btnBekreft" type="button" name="button">Bekreft</button>
      `;
    }
    else if(antall >= 5){
      let pris = 70 * antall * 2;
      divInfo.innerHTML = `Prisen blir ${pris} kr. <br>
      <img src="../vedlegg/matkasse2.png">
      <button id="btnBekreft" type="button" name="button">Bekreft</button>
      `;
    }
  }
  else if(inp3.checked){
    valgtMiddag = "tre";
    if(antall < 5){
      let pris = 80 * antall * 3;
      divInfo.innerHTML = `Prisen blir ${pris} kr. <br>
      <img src="../vedlegg/matkasse3.png">
      <button id="btnBekreft" type="button" name="button">Bekreft</button>
      `;
    }
    else if(antall >= 5){
      let pris = 70 * antall * 3;
      divInfo.innerHTML = `Prisen blir ${pris} kr. <br>
      <img src="../vedlegg/matkasse3.png">
      <button id="btnBekreft" type="button" name="button">Bekreft</button>
      `;
    }
  }
}
btnBekreft.onclick = visPersonInfo;

function visPersonInfo(){
  personInfo.innerHTML = `
  <p>Navn: </p> <p>Ola Nordmann</p> <br>
  <p>Adresse: </p> <p>Norgesveien 123a</p>
  `;
}
