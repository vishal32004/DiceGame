function onRollButtonClick() {
  //remove celebration animation
  document.querySelector(".dice1").classList.add("diceCelebrate");
  document.querySelector(".dice2").classList.add("diceCelebrate");

  document.querySelector(".rollBtn").classList.add("clickAnimation");
  var element = document.querySelector(".rollBtn");
  element.addEventListener("animationend", () => {
    document.querySelector(".rollBtn").classList.remove("clickAnimation");
  });
  diceManager();
}

function randomDiceRollGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceManager() {
  var diceRolls = [];
  var diceRollsNumber = ["one", "two", "three", "four", "five", "six"];
  //Generating two random number of dice
  diceRolls.push(randomDiceRollGenerator());
  diceRolls.push(randomDiceRollGenerator());

  //Changing Dice Image
  //diceRolls[0] -> Player 1
  //diceRolls[1] -> Player 2
  document.querySelector(".playerOneDice").className =
    "playerOneDice fas img" + " fa-dice-" + diceRollsNumber[diceRolls[0] - 1];
  document.querySelector(".playerTwoDice").className =
    "playerTwoDice fas img" + " fa-dice-" + diceRollsNumber[diceRolls[1] - 1];

  //Dice 1 & 2 Animation
  document.querySelector(".playerTwoDice").classList.add("clickAnimation");
  var dice2 = document.querySelector(".playerTwoDice");
  dice2.addEventListener("animationend", () => {
    document.querySelector(".playerTwoDice").classList.remove("clickAnimation");
  });
  document.querySelector(".playerOneDice").classList.add("clickAnimation");
  var dice1 = document.querySelector(".playerOneDice");
  dice1.addEventListener("animationend", () => {
    document.querySelector(".playerOneDice").classList.remove("clickAnimation");
  });
  
  //Deciding the winner
  if (diceRolls[0] > diceRolls[1]) {
    document.querySelector(".result").textContent = "🎉 Player 1 Wins!";
    document.querySelector(".dice1").classList.remove("diceCelebrate");
    document.querySelector(".playerOneDice").classList.add("winnerDice");
  } else if (diceRolls[0] < diceRolls[1]) {
    document.querySelector(".result").textContent = "Player 2 Wins! 🎉";
    document.querySelector(".dice2").classList.remove("diceCelebrate");
    document.querySelector(".playerTwoDice").classList.add("winnerDice");
  } else if (diceRolls[0] == diceRolls[1]) {
    document.querySelector(".result").textContent = "Draw! 🏳️";
    document.querySelector(".dice1").classList.add("diceCelebrate");
    document.querySelector(".dice2").classList.add("diceCelebrate");
  }
}
