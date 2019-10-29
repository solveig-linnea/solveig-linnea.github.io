const inpHusk = document.querySelector("#inpHusk"); //Vi må definere html-elementen som konstanter
const btnLeggTil = document.querySelector("#btnLeggTil"); //Vi må definere html-elementen som konstanter

let huskeliste = []; //Lager en variabel som heter huskeliste som er et tomt array

btnLeggTil.onclick = leggTil; //Når man klikker på knappen skla funksjonen leggTil kjøre

function leggTil() { //Kode for funksjonen leggTil
  huskeliste.push(inpHusk.value);//Pusher det som er skrevet i inp til console
  console.log(huskeliste);
}
