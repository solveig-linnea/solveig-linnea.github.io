//alert("Javascript er lastet")

//Oppgave 1, rektangel
/*
let bredde = Number(prompt("Skriv inn bredden på reklangelet"));
console.log(bredde);

let lengde = Number(prompt("Skriv inn bredden på reklangelet"));
console.log(lengde);

alert("Arealet av reklangelen er " + lengde*bredde );
*/

//Oppgave 2,
let figur = prompt("Er figuren din rektangel eller sirkel? Skriv under.")

if (figur === "rektangel") {
  let bredde = Number(prompt("Skriv inn bredden på reklangelet"));

  let lengde = Number(prompt("Skriv inn bredden på reklangelet"));

  alert("Arealet av reklangelen er " + lengde*bredde );
}
else if (figur === "sirkel") {
  let radius = Number(prompt("Skriv inn radiusen på sirklene din"))

  alert("Arealet av sirkelen er " + Math.pow(radius, 2)*Math.PI);
}
