//Oppgave 2
let treArray = ["lønn", "hassel", "bjørk", "eik", "blodlønn", "furu", "gran"];
treArray.splice(3,1);
console.log(treArray);

treArray.splice(2,1,"hengebjørk");
console.log(treArray);

treArray.splice(4,2);
console.log(treArray);

treArray.splice(4,0["fjellbjørk", "dvergbjørk"]);
console.log(treArray);

function alfabetisk(a, b) {
  a = a.toLowercase();
  b = b.toLowercase();
  if(b < a) {
    return 1;
  }
  else {
    return -1;
  }
}

treArray.sort(alfabetisk);
console.log(treArray);

//Oppgave 3
//lage slideshow
