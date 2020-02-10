//Definerer varabelen
let filmer = ["Pulp Fiction", "Fight Club", "Matrix", "Forrest Gump"];

//SKriver ut Fight CLub på nettsiden
document.write(filmer[1]);

//Bytter ut Matrix med en annen film
filmer.splice(2, 1, "Gudfaren");
console.log(filmer);
