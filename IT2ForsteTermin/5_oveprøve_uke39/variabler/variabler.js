//alert("Javascriptet er lastet");

let mittTall = 23;

//Output
console.log(mittTall); //concole.log(variabel); logger i konsollen

console.log("Mitt tall er",mittTall);
alert("Mitt tall er " + (mittTall + 52)); //Alert(variabel); lager en popup-boks med en beskjed i konsollen

//input
let brukersTall = Number(prompt("Skriv et tall")); //Lager en prompt-boks hvor brukeren kan skrive inn et tall, gjør dette tallet om til et tall med Numer(tekst)
let brukersTall2 = Number(prompt("Skriv et annet tall"));

console.log(brukersTall + brukersTall2);

// Datatyper
let tall = 25;
let desimaltall = 25.7;

let tekst = "Hallo dette er en tekst"; // Datatypen string
let tekst2 = "42"; //Dette er også en string, vi må huske å konvertere til number

let tall3 = Number(tekst2); // Her konverteres string til datatypen number

let bool1 = True; //Datatypen boolean
let bool2 = False; //Datatypen boolean


// Indekserte variabler / Inderkserte Datatyper

let mittObjekt = {
  navn: "Solveig Linnea Kildahl",
  alder: 17,
  yrke: "student",
  sliten: True
}

let minListe = ["Solveig","Caroline","Tommy",17,18,True,MittObjekt];

minListe[6].navn = "Per";
