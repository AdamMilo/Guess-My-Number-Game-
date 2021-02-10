"use strict";
/////////THE CODE ITSELF
//declaring our (State) variables
//the variables that track the state of our application and
//transfer that data to our javaScript.
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//creating an event listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess, secretNumber);
  //typeof -> will return the datatype of the variable coming
  //after it.

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "Not a number!";
    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "300px";
    document.querySelector(".number").textContent = secretNumber;

    //stores and displays the highscore if the current score is better
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //When the guess is too low
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    //below, we decrement and check if the score is zero at the same time
    if (score-- > 1) {
      document.querySelector(".score").textContent = score;

      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      //Notice how above we can in fact use ternary operator as a string argument
      //within a function, mui mui interesante, no?
      //When the player loses
    } else {
      //if the score is 0
      score = 0;
      document.querySelector("body").style.background = "crimson";
      document.querySelector(".score").textContent = score;
      displayMessage("You lose!");
    }
  }
});

//Creating an event listener on the "Again!" button

document.querySelector(".again").addEventListener("click", function () {
  //The event handler function will reset the game parameters
  displayMessage("start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").value = ""; //the empty string represents none value
  //remember that all <input> elements accept a "string" value.
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
