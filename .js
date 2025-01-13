let playerChoice = "";
let humanScore = 0;
let computerScore = 0;

function computerChoice() {
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
}

function updateScore() {
  const displayScore = document.querySelector("#score");
  displayScore.textContent =
    "Player score: `${humanScore}` | Computer score: `${computerScore}";
}

function playRound() {
  const computerPick = computerChoice();

  console.log("Player choice: ", playerChoice);
  console.log("Computer choice: ", computerPick);

  if (playerChoice === computerPick) {
    const roundResult = document.querySelector("#round-result");
    roundResult.textContent = " Round result: It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerPick === "Scissors") ||
    (playerChoice === "Paper" && computerPick === "Rock") ||
    (playerChoice === "Scissors" && computerPick === "Paper")
  ) {
    const roundResult = document.querySelector("#round-result");
    roundResult.textContent = " Round result: You win!";
    updateScore();
  } else {
    const roundResult = document.querySelector("#round-result");
    roundResult.textContent = " Round result: You lose!";
    computerScore++;
  }
}

setupGame();
