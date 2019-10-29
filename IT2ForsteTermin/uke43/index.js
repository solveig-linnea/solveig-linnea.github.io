//Definere array
let minArray = ["Solveig","Per", "Caroline", "Thor", 14, 3, 6, 17];

//Hente ut en verdi fra arrayen
console.log(minArray[2]);

//legge til en verdi i array
minArray.push("Kong Harald");
console.log(minArray);


//Fjerne en verdi fra array
minArray.splice(1,1); //.splice fjerner verdier fra et array, det første tallet er startposisjonen og det andre tallet er antall som skal fjernes
console.log(minArray);

let bokstaver = ["q", "D", "e", "t"];
bokstaver.sort();
console.log("bokstaver");

function sorterAlfabetisk(a, b) {
  a = a.toLowercase();
  b = b.toLowercase();
  if(b < a) {
    return 1;
  }
  else {
    return -1;
  }
}
