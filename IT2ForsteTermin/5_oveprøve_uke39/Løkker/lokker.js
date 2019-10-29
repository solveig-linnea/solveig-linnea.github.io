// Oppgave 5.1

//Løsning med while
/*
let i = 1; //Definerer en global variabel i, som skal fungere som telleren i løkka

while(i <= 10){ // Så lenge i er mindre eller lik 10, skal løkka kjøre.
  console.log(i); // Logger i, i konsollen
  i = i + 1; // Legger en til i
  //i += 1;
  //i++; Disse tre linjene gjør akkuratt det samme.
}

// Løsning med for
for(let i = 1; i <= 10; 1 += 1){
  console.log(i);
}
*/

//oppgave 5.2

//Løsning med while
/*
let i = 1;

while (i <= 10) {
  console.log(i * 7);
  i = i + 1;
}

//Løsning med for
for(let i = 1; i <= 10; 1 +=1){
  console.log(i * 7)
}
*/

//Opgave 5.3
/*
let sum = 0
for(let i = 0; i <= 1000; i += 1){
  sum += i;
}
console.log(sum);
*/


//Oppgave 5.4
for(let i = 0; i <= 100; i += 1){
  if(i % 2 !== 0){
    console.log(i);
  }
} // Logger kun partall mellom
