function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);
  textSize(32);
  //text("Hallo der", 10, 20);

  for(let i = 1; i <=10; i = i + 1){
    for (let j = 1; j <=10; j = j + 1) {
      text(i*j, i*50, j*50);
    }

  }

}
