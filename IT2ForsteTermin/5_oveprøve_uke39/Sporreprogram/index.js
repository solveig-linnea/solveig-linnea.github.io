//Oppgave 4.1
/*
let spor1 = prompt("Hvilken farge er huden på isbjørnen?")
if (spor1 === "sort" || spor1 === "svart") {
  alert("Du svarte riktig");
}
else {
  alert("Du svarte feil");
}
*/
//Oppgave 4.2
let riktige = 0;
let galt = 0;

let svar1 = prompt("Hvilken farge er huden på isbjørnen?")
if (svar1 === "sort" || svar === "svart") {
  alert("Riktig! Bra jobba");
  riktige = riktige + 1;
}
else {
  alert("Nei nei nei, fargen er sort!");
  galt = galt +1;
}

let svar2 = prompt("Hva er hovedstaten i Mongolia")
if (svar2 === "Ulan Bataar") {
  alert("Du er kjempeflink i geografi, karakter 6!");
  riktige = riktige + 1;
}
else {
  alert("NEI! DET MÅ DU JO VITE!");
  galt = galt +1;
}

let svar3 = prompt("Hvem var solkongen?")
if (svar3 === "Alexander den store") {
  alert("Bra jobba, toppscore i historie!");
  riktige = riktige + 1;
}
else {
  alert("Hvordan vet du ikke det!");
  galt = galt +1;
}


alert("Du fikk: " + riktige + "poeng!");
