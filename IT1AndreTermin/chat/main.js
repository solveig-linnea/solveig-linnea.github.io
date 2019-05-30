//Referanser til HTML-elementer
const secMeldinger = document.querySelector("#secMeldinger");
const skjema = document.querySelector("#skjema");
const utesecMeldinger = document.querySelector("#utesecMeldinger")
const inpMelding = document.querySelector("#inpMelding");
const btnSend = document.querySelector("#btnSend");

// Global veriabler
let user;

// Sjekke om bruker er logget inn
firebase.auth().onAuthStateChanged( newUser => {
  if(newUser){
    //Sette user til dne innloggende brukeren
    user = newUser;
    //Hendelses funskjoner hvis bruker er innlogget
    console.log(user);
    btnSend.onclick = sendMelding;
    meldinger.on("child_added",visMelding);
  }
  else{
    secMeldinger.innerHTML = `
    <p>Du er ikke innlogget, logg inn for å se meldinger</p>
    <a href ="logIn.html">Logg inn her</a>
    `;
  }
})

//Referanser til firebase database
const db = firebase.database();
const meldinger = db.ref("messengerMeldinger");


//Funskjonsdefininsjoner
function sendMelding(){
  let nyMelding = {
    brukerID: user.email,
    brukerNavn: user.displayName,
    melding: inpMelding.value
  };
  meldinger.push(nyMelding);
  console.log("melding sendt!");
}
function visMelding(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.val();
  secMeldinger.innerHTML += `<p>${objekt.brukerNavn} - ${objekt.melding}</p>`;
  scrollToBottom();
}




function scrollToBottom(){
  utesecMeldinger.scrollTop = utesecMeldinger.scrollHeight;
}

//oppstart
