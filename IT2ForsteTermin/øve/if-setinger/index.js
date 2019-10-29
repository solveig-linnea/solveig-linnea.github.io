let navn = prompt("Skriv inn brukernavn");
const profil = document.querySelector("#divProfil");

if (navn  === "kiso1706") {
  alert("Velkommen til profilen din Solveig Kildahl.");
  visProfil();

  function visProfil(snapshot){
    profil.innerHTML += `
    <section id="header">
      <h1>Her kan du se hele profilen din.</hi>
    </section>
    `
  };
} else {
  alert("Kontakt oss på mail: sandvika@afk.no");
}
