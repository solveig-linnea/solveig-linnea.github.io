
//Oppgave 1a
//en for of-løkke
//Som henter vert element og legger den i en variabel
const matListe = document.querySelector("#matListe");
let matvarer = ["ost", "brød", "Paprika", "kaviar"];

//Sortere listen med matvarer
//matvarer.sort(); Fungerer ikke alene dersom vi har store og små bokstaver eller med æ, ø, å
//Da må vi lage en sorteringsfunksjon som sorterer alfabetisk
matvarer.sort(sorterAlf);

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



for (let vare of matvarer){
  matListe.innerHTML += `<li>${vare}</li>`;
  //console.log(vare);
}

//Oppgave 1b
//Med vanlig for-løkke
for (let i = 0; i < matvarer.lenght; i += 1 ){
  matListe.innerHTML += `<li>${matvarer[i]}</li>`
}


//Oppgave 3
// a
let temp = [3, 4, 5, 6, 5, 5, 6, 4, 4, 5];

let antall = 0;
let total = 0;

for (let dagTemp of temp) {
  total += dagTemp;
  if(dagTemp < 5){
    antall += 1;
  }
}

temp.sort(sorterLavTilHoy);

function sorterLavTilHoy(a, b) {
  return a - b;
}
console.log(temp);

console.log("Antall dager under 5 grader: " + antall);

// b, finne gjennomsnitt av temperaturen
console.log("Gjennomsnitts temperatur var: " + (total / temp.lenght));

// Oppgave 4
let personer = [
  {
    navn: "Thor",
    alder: 28
  },
  {
    navn: "Solveig",
    alder: 17
  },
  {
    navn: "Kristine",
    alder: 15
  }
];
//console.log(personer[0].navn);
//Lage en for-løkke som sorterer gjennom navn og alder på alle
//og en fuknskjon som sorterer alderen fra ung til eldre


personer.sort(sorterAlder);
//Så skal vi reversere den funskjonen, slik at rekkefølgen på elementene blir snudd
personer.reverse();

function sorterAlder(a,b){
  return a.alder - b.alder;
}

for (let person of personer) {
  console.log(`Hei ${person.navn}, du er ${person.alder} år.`)
}
