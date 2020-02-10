const divTemp = document.querySelector("#temp");
const inpTemp = document.querySelector("#inpTemp");
const btnRegn = document.querySelector("#btnRegn");
const bilde = document.querySelector("#btnRegn");

btnRegn.onclick = skrivUtTemp;


function skrivUtTemp(){
  let fahrenheit = inpTemp.value;
  let celsius = (fahrenheit - 32) * (5/9);
  divTemp.innerHTML = `Temp: ${celsius} grader.`;

  // Alternativ løsning:
  //divTemp.innerHTML = "<div>Temp: " + celsius + " grader.</div>";

  // Svar på elevspørsmål:
  //divTemp.innerHTML = `<div style="background-color:blue; color: white; height:${celsius.toFixed(0)}px;">Temp: ${celsius} grader.</div>`;

}
