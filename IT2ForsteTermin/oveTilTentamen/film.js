const inpNavn = document.querySelector("#inpNavn");
const inpFilm = document.querySelector("#inpFilm");
const btnRegistrer = document.querySelector("#btnRegistrer");
const divListe = document.querySelector("#divListe");

let filmer = [];

btnRegistrer.onclick = registrerFilm;

function registrerFilm(){
  filmer.push({
    navn: inpNavn.value,
    antall: inpFilm.value
  });

  filmer.sort(sorterFilmer);

  divListe.innerHTML = ``;
  for(let film of filmer){
    divListe.innerHTML += `<div>${film.navn}: ${film.antall}`;
  }
}

function sorterFilmer(a, b) {
  return b.antall - a.antall;
}
