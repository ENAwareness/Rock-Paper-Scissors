let playerChoice = "";
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

function getComputerChoice() {
  let getRandomNum = Math.random();

  if (getRandomNum >= 0 && getRandomNum < 1 / 3) {
    return "Rock";
  } else if (getRandomNum >= 1 / 3 && getRandomNum < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function setupGame() {
  const rockBtn = document.querySelector("#btn-rock");
  rockBtn.addEventListener("click", () => {
    playerChoice = "Rock";
    playRound();
  });
  const paperBtn = document.querySelector("#btn-paper");
  paperBtn.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound();
  });
  const scissorsBtn = document.querySelector("#btn-scissors");
  scissorsBtn.addEventListener("click", () => {
    playerChoice = "Scissors";
    playRound();
  });
  const resetBtn = document.querySelector("#btn-reset");
  resetBtn.addEventListener("click", () => {
    resetGame();
    resetBtn.style.display = "none";
  });
}

function updateScore() {
  const displayScore = document.querySelector("#score");
  displayScore.textContent = `Player score: ${humanScore} | Computer score: ${computerScore}`;
}

function selectWinner() {
  const winnerDisplay = document.querySelector("#winner");
  const resetBtn = document.querySelector("#btn-reset")
  if (humanScore === 5) {
    winnerDisplay.textContent = "You are the winner!";
    isGameOver = true;
    resetBtn.style.display = "block";
  }
  if (computerScore === 5) {
    winnerDisplay.textContent = "Computer is the winner!";
    isGameOver = true;
    resetBtn.style.display = "block";
  }
}

function playRound() {
  if (isGameOver) {
    return;
  }
  const computerPick = getComputerChoice();
  const roundResult = document.querySelector("#round-result");

  console.log("Player choice: ", playerChoice);
  console.log("Computer choice: ", computerPick);

  if (playerChoice === computerPick) {
    roundResult.textContent = " Round result: It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerPick === "Scissors") ||
    (playerChoice === "Paper" && computerPick === "Rock") ||
    (playerChoice === "Scissors" && computerPick === "Paper")
  ) {
    roundResult.textContent = " Round result: You win!";
    humanScore++;
  } else {
    roundResult.textContent = " Round result: You lose!";
    computerScore++;
  }
  updateScore();
  selectWinner();
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  isGameOver = false;
  document.querySelector("#round-result").textContent = "Round result: ";
  document.querySelector("#winner").textContent = "";
  updateScore();
}

setupGame();
