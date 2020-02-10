const inpAlder1 = document.querySelector("#inpAlder1");
const inpAlder2 = document.querySelector("#inpAlder2");
const btnRegistrer = document.querySelector("#btnRegistrer");
const divResultat = document.querySelector("#divResultat");

btnRegistrer.onclick = regnUt;

function regnUt(){
  let x = Number(inpAlder1.value) + Number(inpAlder2.value);
  divResultat.innerHTML = `Barna sin alder summert er: ${x} år.`;

  if(x < 4){
    divResultat.innerHTML = `Barn på tilsammen ${x} år kommer inn gratis.`;
  }
  else if(x >= 4 && x <= 18){
    divResultat.innerHTML = `Med alderen ${x} må man betale barnebilett.`;
  }
  else if(x > 18){
    divResultat.innerHTML = `Med alderen ${x} må man betale voksenbilett.`;
  }
  else if(x < 0 || x > 150){
    divResultat.innerHTML = `Det er ikke mulig å ha negativt tall eller være over 150 år`;
  }
}
