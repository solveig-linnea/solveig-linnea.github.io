const imgSlide = document.querySelector("#imgSlide");
const btnNeste = document.querySelector("#btnNeste");

const bilder = ["bilder/1.jpg", "bilder/2.jpg", "bilder/3.jpg"];
let bildeNR = 0;

btnNeste.onclick = nesteBilde;

function nesteBilde() {
  if(bildeNR >= bilder.length -1) {
    bildeNR = 0;
  }
  else {
    bildeNR += 1;
  }
  imgSlide.src = bilder[bildeNR];
}
