let humanScore = 0;
let computerScore = 0;

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

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice == "Rock") {
        if (computerChoice == "Paper") {
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice == "Scissors") {
            console.log("You Win!");
            humanScore++;
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice == "Rock") {
            console.log("You Win!");
            humanScore++;
        }
    } else if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice == "Paper") {
            console.log("You Win!");
            humanScore++;
        }
    }
}

playRound();
console.log("HumanScore :" + humanScore)
console.log("ComputerScore :" + computerScore)