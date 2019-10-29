
//Sortere alfabetisk
matvarer.sort(sorterAlf);

function sorterAlf(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a > b){
    return 1;
  }
  else {
    return -1;
  }
}

//Sortere fra lav til høye tall
temp.sort(sorterLavTilHoy);

function sorterLavTilHoy(a, b) {
  return a - b;
}
