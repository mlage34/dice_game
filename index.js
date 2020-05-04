

var randomNumber1 = Math.floor(Math.random() * 6);
var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var newDiceImg = diceImages[randomNumber1];

document.querySelector(".img1").setAttribute("src", "images/" + newDiceImg);

var randomNumber2 = Math.floor(Math.random() * 6);
var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var newDiceImg = diceImages[randomNumber2];

document.querySelector(".img2").setAttribute("src", "images/" + newDiceImg);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 It's a draw! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
