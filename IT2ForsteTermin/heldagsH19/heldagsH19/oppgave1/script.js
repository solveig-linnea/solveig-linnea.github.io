const inpAlder1 = document.querySelector("#inpAlder1");
const inpAlder2 = document.querySelector("#inpAlder2");
const btnRegn = document.querySelector("#btnRegn");
const divResAlder = document.querySelector("#divResAlder");
const divResBeskjed = document.querySelector("#divResBeskjed");


btnRegn.onclick =

function regnUt(){
  let totAlder = Number(inpAlder1.value) + Number(inpAlder2.value); // Henter verdier fra input-felt, gjør om til number og plusser sammen.
  divResAlder.innerHTML = `Total alder: ${totAlder} år`;

  if (totAlder < 4){
    divResBeskjed.innerHTML = `Barn på tilsammen ${totAlder} år kommer inn gratis.`;
  }
  else if (totAlder < 18) {
    divResBeskjed.innerHTML = `Med alderen ${totAlder} år må man betale barnebillett.`;
  }
  else{
    divResBeskjed.innerHTML = `Med alderen ${totAlder} år må man betale voksenbillett.`;
  }

}