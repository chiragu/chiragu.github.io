// Invention Dice Random Spinner

// Get handle on dice
const dice = document.getElementsByClassName("dice");

// Randomly rolls the dice
function setDice() {

    for (let i=0; i<dice.length; i++) {

        let dice1roll = Math.floor(Math.random() * 6) + 1;
        dice[i].innerHTML = "<img src='images/dice/dice" + (i+1) + "_" + dice1roll +  ".png' alt='dice'>";
        console.log("<img src='images/dice/dice" + (i+1) + "_" + dice1roll +  ".png' alt='dice'>");

    }
}

// set the dice on initial load of page
setDice();