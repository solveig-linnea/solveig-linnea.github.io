var tilfeldigTall = 0;

//Hva skal stå i while(----) for at løkken skal kjøre så lenge tilfeldigTall ikke er lik 3?
while(tilfeldigTall !== 3){
  tilfeldigTall = Math.floor(Math.random()*10);
  console.log("Svaret er ikke 3");
}
console.log("Svaret er 3");


for(let i = 0; i < 50; 1++){
  if(i % 3 === 0){
    document.write(i);
  }
}
