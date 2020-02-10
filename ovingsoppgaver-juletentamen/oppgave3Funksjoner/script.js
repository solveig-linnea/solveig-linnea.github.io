function yatzyKast(/*Hva skal stå her?: */ n) {
   let resultat = [];

   for(let i = 0; i < n; i++){
     resultat.push(Math.floor(Math.random()*6)+1);
   }
   return resultat;
}
