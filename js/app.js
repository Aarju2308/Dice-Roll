    // Getting Player Names
var player1 = prompt("who is player 1 :");
var player2 = prompt("who is player 2 :");

    // Entering Player Text
document.querySelectorAll("p")[0].innerText = player1;
document.querySelectorAll("p")[1].innerText = player2;

    // Roll Button
document.querySelector("button").addEventListener("click", diceRoll);

    // Dice Roll Function
function diceRoll() {

  var randomNumber1 = Math.floor((Math.random() * 6) + 1);

  var randomDiceImage = "./images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomDiceImage)

  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomDiceImage2)

  var tittle = document.querySelector("h1")

  if (randomNumber1 > randomNumber2) {
    tittle.innerText = player1 + " Wins"
  } else if (randomNumber1 === randomNumber2) {
    tittle.innerText = "It's a Tie!"
  } else {
    tittle.innerText = player2 + " Wins"
  }
}
