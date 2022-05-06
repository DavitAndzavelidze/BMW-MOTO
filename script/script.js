let redBTN = document.getElementById("red");
let yellowBTN = document.getElementById("yellow");
let blackBTN = document.getElementById("black");
let bike = document.getElementById("bike");

redBTN.addEventListener("click", function () {
  bike.style.backgroundImage = "url(images/red.png)";
});
yellowBTN.addEventListener("click", function () {
  bike.style.backgroundImage = "url(images/yellow.png)";
});
blackBTN.addEventListener("click", function () {
  bike.style.backgroundImage = "url(images/black.png)";
});
