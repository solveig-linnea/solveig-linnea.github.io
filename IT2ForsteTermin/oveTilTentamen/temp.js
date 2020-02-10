const inpGrader = document.querySelector("#inpGrader");
const btnRegistrer = document.querySelector("#btnRegistrer");
const sorter = document.querySelector("#sorter");
const divDiagram = document.querySelector("#divDiagram");

let temperaturer = [];

btnRegistrer.onclick = registrerTemp;
sorter.onclick = nySortering;

function registrerTemp() {
  temperaturer.push(Number(inpGrader.value));
  nySortering();
  skrivTemp();
}

function nySortering() {
  if(sorter.value === lavTilHoy){
    temperaturer.sort(lavTilHoy);
  }
  else{
    temperaturer.sort(hoyTilLav);
  }
}

function skrivTemp() {
  divDiagram.innerHTML = ``;
  for(let temp of temperaturer){
    if(temp >= 0){
      divDiagram.innerHTML += `
      <div class = "soyle positiv" style="height:${temp*10 + 100}px">${temp}</div>
      `;
    }
    else{
      divDiagram.innerHTML += `
      <div class="soyle negativ" style="height:${temp*10 + 100}px">${temp}</div>
      `;
    }
  }
}
function lavTilHoy(a, b) {
  return a - b;
}
function hoyTilLav(a, b) {
  return b - a;
}
