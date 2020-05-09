/*
x + y = 7
x – y = 3

Dette ligningssettet kan løses ved å bruke en dobbel for-løkke,
som tester verdier for x og y.
*/
let x; // Global variabel for x
let y; // Global variabel for y

for(let i = 0; i < 10; i += 1){
  for(let j = 0; j < 10; j += 1){
    if((i + j == 7) && (i - j == 3)){
      // Hvis i + j = 7 og i - j = 3 skal i og j skrives til de globale variablene x og y.
      x = i;
      y = j;
      break; // Nå er løsningen funnet og vi trenger ikke kjøre mer av løkken.
    }
  }
}

console.log("Løsningen på ligningssettet");
console.log("x + y = 7");
console.log("x - y = 3");
console.log(`x = ${x}, y = ${y}`);