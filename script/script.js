let redBTN = document.getElementById("red");
let blueBTN = document.getElementById("blue");
let blackBTN = document.getElementById("black");
let bike = document.getElementById("bike");

redBTN.addEventListener("click", function () {
  bike.style.backgroundImage = "url(images/BMW1.png)";
});
blueBTN.addEventListener("click", function () {
  bike.style.backgroundImage = "url(images/BMW2.png)";
});
blackBTN.addEventListener("click", function () {
  bike.style.backgroundImage = "url(images/BMW3.png)";
});
