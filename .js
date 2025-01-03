function humanScore() {
    let humanScore = 0;
}

function computerScore() {
    let computerScore = 0;
}

function getComputerChoice() {
    let getRandomNum = Math.random();
    
    if (getRandomNum >= 0 && getRandomNum < 1/3) {
        return ("Rock");
    } else if (getRandomNum >= 1/3 && getRandomNum< 2/3){
        return ("Paper");
    } else  {
        return("Scissors");
    }
  }

console.log(getComputerChoice())

function getHumanChoice() {
    let aHumanChoice = prompt("Input Rock, Paper or Scissors?", "");
    aHumanChoice = aHumanChoice.charAt(0).toUpperCase() + aHumanChoice.slice(1);

    if (aHumanChoice == "Rock" || aHumanChoice == "Paper" || aHumanChoice == "Scissors") {
        return(aHumanChoice)
    } else {
        return("rock, paper, scissors only!")
    }
}

console.log(getHumanChoice())

