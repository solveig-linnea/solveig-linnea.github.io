console.log("Skriptet er lastet");

//Oppretter variabler som referer til databasen
const db = firebase.database();
const bloggere = db.ref("bloggere");

//Pusha en string til databasen, firebaselager primærnøkkel for oss
bloggere.push("Sophie Elise");

//Pushet et objekt til databasen, firebase lager primærnøkkel
bloggere.push({
  "navn":"Jane Smith",
  "folgere":59000
});
//Lagde et objekt med egen primærnøkkel
const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set({
  "navn":"Ola Nordmann",
  "folgere":2000000
})

//oppdaterer pappahjerte med nytt navn
pappahjerte.update({
  "navn":"Hans Olav Lahlum"
})
