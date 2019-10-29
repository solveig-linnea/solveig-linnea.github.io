const inpFarge = document.querySelector("#inpFarge");

function byttBakgrunn() {
  document.body.style.transition = "0.8s"
  document.body.style.backgroundColor = inpFarge.value;
}
inpFarge.oninput = byttBakgrunn;
