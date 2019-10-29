// --- Funksjoner ---

// --- Skrivemåte ---

//Funskjonsdefenisjon
function siHei(){
  console.log("Hei");
}

//Funksjonskall
siHei();

// --- Hendelser ---

window.onclick = siHei;

const overskrift1 = document.querySelector("#overskrift1");

overskrift1.onclick = byttTekst;

function byttTekst(){
  let navn = "Solveig";
  overskrift1.innerHTML += `
  <div>
    Hei på deg ${navn}!
  </div>

  `;
}
