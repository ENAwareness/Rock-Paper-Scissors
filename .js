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

function getHumanChoice() {
    let aHumanChoice = prompt("Input Rock, Paper or Scissors?", "");
    aHumanChoice = aHumanChoice.trim().charAt(0).toUpperCase() + aHumanChoice.slice(1).toLowerCase();

    if (aHumanChoice === "Rock" || aHumanChoice === "Paper" || aHumanChoice === "Scissors") {
        return(aHumanChoice)
    } else {
        return("rock, paper, scissors only!")
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().trim();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLocaleLowerCase();
    
    // 调试日志
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return("tie")
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log("You lose!");
            return("computer")
        } else if (computerChoice === "Scissors") {
            console.log("You Win!");
            return("human")
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log("You lose!");
            return("computer")
        } else if (computerChoice === "Rock") {
            console.log("You Win!");
            return("human")
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose!");
            return("computer")
        } else if (computerChoice === "Paper") {
            console.log("You Win!");
            return("human")
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    while(humanScore < 3 && computerScore < 3) {
        let winner = playRound();  
        
        if(winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log("human score :" + humanScore);
        console.log("computer score :" + computerScore);

    }

    if (humanScore === 3) {
        console.log("The winner is human")
    } else {
        console.log("The winner is computer")
    }
}

playGame();