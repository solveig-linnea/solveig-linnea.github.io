const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");
const slideshow = document.querySelector("#slideshow");
const imgSlide = document.querySelector("#imgSlide");
const btnNeste = document.querySelector("#btnNeste");

const partier = {
  "SP": {
    representanter: 19,
    slagord: "Vi tror på hele Norge!",
    bilder: ["../vedlegg/sp01.jpg", "../vedlegg/sp02.jpg", "../vedlegg/sp03.jpg"]
  },
  "MDG": {
    representanter: 1,
    slagord: "Ta vare på fremtiden!",
    bilder: ["../vedlegg/mdg01.jpg", "../vedlegg/mdg02.jpg", "../vedlegg/mdg03.jpg"]
  }
};

let valgtParti = "";
let bildeNr = 0;

imgSp.onclick = function() {
  visParti("SP");
  valgtParti = "SP";
  visSlideshow();
}
imgMdg.onclick = function() {
  visParti("MDG");
  valgtParti = "MDG";
  visSlideshow();
}

btnNeste.onclick = nesteBilde;

function visParti(partiNavn) {
  divInfo.innerHTML = `
    <div>Navn: ${partiNavn}.</div>
    <div>Representanter: ${partier[partiNavn].representanter}.</div>
    <div>Slagord: ${partier[partiNavn].slagord}.</div>
  `
}

function nesteBilde() {
  if(bildeNr >= partier[valgtParti].bilder.length - 1){
    bildeNr = 0;
  }
  else{
    bildeNr += 1; // Øker bildenummer med 1
  }
  console.log(bildeNr);
  imgSlide.src = partier[valgtParti].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}

function visSlideshow() {
  slideshow.style.display = "block"; // Viser slideshowet på nettsiden
  bildeNr = 0;
  imgSlide.src = partier[valgtParti].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}
