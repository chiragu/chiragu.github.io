// Invention Dice Random Spinner

// Get handle on dice
const dice = document.getElementsByClassName("dice");

// Randomly rolls the dice
function setDice() {

    for (let i=0; i<dice.length; i++) {

        let dice1roll = Math.floor(Math.random() * 6) + 1;
        dice[i].innerHTML = "<img src='images/dice/dice" + dice1roll + "_" +  (i+1)+  ".png' alt='dice'>";
        //console.log("<img src='images/dice/dice" + dice1roll + "_" +  (i+1)+  ".png' alt='dice'>");

    }
}

// set the dice on initial load of page
setDice();