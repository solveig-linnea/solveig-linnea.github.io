const btnRegn = document.querySelector("#btnRegn");
const imgGranbo = document.querySelector("#imgGranbo");
const imgGranstua = document.querySelector("#imgGranstua");
const divInfo = document.querySelector("#divInfo");
const slideshow = document.querySelector("#slideshow");
const imgSlide = document.querySelector("#imgSlide");
const btnNeste = document.querySelector("#btnNeste");

const hytter = {
  "Granbo": {
    sengeplasser: 6,
    standard: "Middels",
    bilder: ["../vedlegg/granbo01.jpg", "../vedlegg/granbo02.jpg", "../vedlegg/granbo03.jpg"]
  },
  "Granstua": {
    sengeplasser: 4,
    standard: "Høg",
    bilder: ["../vedlegg/granstua01.jpg", "../vedlegg/granstua02.jpg", "../vedlegg/granstua03.jpg"]
  }
};

let valgtHytte = "";
let bildeNr = 0;

imgGranbo.onclick = function(){
  visHytte("Granbo");
  valgtHytte = "Granbo";
  visSlideshow();
}
imgGranstua.onclick = function(){
  visHytte("Granstua");
  valgtHytte = "Granstua";
  visSlideshow();
}

btnRegn.onclick = finnHytter;

function finnHytter(hytteNavn){
  let antall = Number(inpVerdi.value);
  if(antall <= 4){
    visHytte("Granstua");
    valgtHytte = "Granstua";
    visSlideshow();
  }
  else if(antall > 4 ||antall <= 6){
    visHytte("Granbo");
    valgtHytte = "Granbo";
    visSlideshow();
  }
}

btnNeste.onclick = nesteBilde;

function visHytte(hytteNavn){
  divInfo.innerHTML = `
    <div>Navn: ${hytteNavn}.</div>
    <div>Sengeplasser: ${hytter[hytteNavn].sengeplasser}.</div>
    <div>Standard: ${hytter[hytteNavn].standard}.</div>
  `
}

function nesteBilde() {
  if(bildeNr >= 2){
    bildeNr = 0;
  }
  else{
    bildeNr += 1;
  }
  console.log(bildeNr);
  imgSlide.src = hytter[valgtHytte].bilder[bildeNr];
}

function visSlideshow(){
  slideshow.style.display = "block";
  bildeNr = 0;
  imgSlide.src = hytter[valgtHytte].bilder[bildeNr];
}
