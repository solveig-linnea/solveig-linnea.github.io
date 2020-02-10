let liste = [3, 51, 18, 7, 32, 10, 74];

//Oppgave 1
//Finne summen
sum = 0;

for(let i = 0; i < liste.length; i++) {
    let tall = liste[i];
    sum += tall;
}
console.log("Den endelige summen er " + sum);

//Oppgave 2
//Finne høyeste tall
 //let hoy = Math.max(...liste);
 //console.log("Det høyeste tallet er " + hoy);
//Svar med løkke

let maks = -Infinity;

for(let tall of liste){
  if(tall > maks){
    maks = tall;
  }
}
console.log("Det høyeste tallet er " + maks);

//Oppgave 3
//Finne partall
for(let tall of liste){
  if(tall % 2 === 0){
    console.log("Partall i listen: " + tall);
  }
}