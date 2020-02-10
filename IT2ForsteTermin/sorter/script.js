
//Sortere alfabetisk
function sorterAlf(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a > b){
    return 1;
  }
  else {
    return -1;
  }
}

//Sortere fra lave til høye tall
function tallLavTilHoy(a, b) {
  return a - b;
}
//sortere fra høye tall til lave
function tallHoyTilLav(a, b) {
  return b - a;
}

//Sortere objekter
let personer = [
  {
  navn: "Thor",
  alder: 28
},
{
  navn: "Espen",
  alder: 30
}
];

function sorterObjektPerosner(a, b) {
  return a.alder - b.alder;
}
