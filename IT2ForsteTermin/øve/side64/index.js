//alert("Javascript er lastet");

//Oppgave 1
/*
let antallFrukt = 3;
let antallGronnsaker = 2;
let antallVarer = antallFrukt + antallGronnsaker;

document.write(antallVarer);
*/

//Oppgave 2
/*
let uPris = prompt("Hva koseter varen din?");
let fullPris = uPris*1.25

alert("Varen vil koste " + fullPris.toFixed(2) + "kr.");
*/

//Oppgave 3
/*
let data = prompt("Hvor mye data har du brukt denne måneden?")
let antSam = prompt("hvor mange ganger har du ringt denne måneden?");
let ringetid = prompt("Hvor mange minutter har du snakket på telefonen denne måneden?");
let sms = prompt("Hvor mange sms'er har du sendt?");
let mms = prompt("Hvor mange mms'er har du sendt?");

let pris = data*10+antSam*0.89+ringetid*0.39+sms*0.69+mms*1.99;

alert("Du må betale " + pris + "kr, denne måneden.")
*/

//Oppgave 4
//let navn = ["Caroline", "Erlen", "Thor", "Niklas", "Solveig"];
//document.write(navn[4]);

//Oppgave 5
let frukt1 = {navn:"eple", pris: 2};
let frukt2 = {navn:"banan", pris: 3};
let frukt3 = {navn:"appelsin", pris: 4};
//Bytter verdi på prisen til frukt2
frukt2.pris=5;
