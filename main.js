console.log("Welcome to Odin's Rock Paper Scissors Game!");

// maximum score needed to declare a winner
const MAX_SCORE = 5;

// track scores for human and computer
let human_score = 0;
let computer_score = 0;

// UI elements
const resultList = document.querySelector("ul");
const choicesDiv = document.querySelector("div");

// create buttons for the player choices
const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";

choicesDiv.append(rockButton, paperButton, scissorsButton);

// get a random computer choice
function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  }
  return "scissors";
}

// normalize and return the human choice
function getHumanChoice(choice) {
  return choice.toLowerCase().trim();
}

// add a new line to the result list
function appendRoundMessage(message) {
  const item = document.createElement("li");
  item.textContent = message;
  resultList.appendChild(item);
}

// disable the choice buttons when the game is over
function endGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// determine the winner of the round and update score
function playround(human_choice, computer_choice) {
  if (human_score === MAX_SCORE || computer_score === MAX_SCORE) {
    return; // game already finished, ignore further rounds
  }

  const normalizedHuman = getHumanChoice(human_choice);
  appendRoundMessage(
    `YOU = ${normalizedHuman} : OPPONENT = ${computer_choice}`,
  );

  if (normalizedHuman === computer_choice) {
    appendRoundMessage("Tie game");
  } else if (
    (normalizedHuman === "rock" && computer_choice === "scissors") ||
    (normalizedHuman === "paper" && computer_choice === "rock") ||
    (normalizedHuman === "scissors" && computer_choice === "paper")
  ) {
    human_score += 1;
    appendRoundMessage(`${normalizedHuman} beats ${computer_choice}`);
  } else {
    computer_score += 1;
    appendRoundMessage(`${computer_choice} beats ${normalizedHuman}`);
  }

  appendRoundMessage(
    `SCORE -> YOU: ${human_score} | OPPONENT: ${computer_score}`,
  );

  if (human_score === MAX_SCORE) {
    appendRoundMessage("Game over: You win!");
    appendRoundMessage(getwinner());
    endGame();
  } else if (computer_score === MAX_SCORE) {
    appendRoundMessage("Game over: Opponent wins!");
    appendRoundMessage(getwinner());
    endGame();
  }
}

// returns the final winner after the game ends
function getwinner() {
  if (computer_score > human_score) {
    return "The winner is Computer";
  } else if (human_score > computer_score) {
    return "The winner is Human";
  }
  return "The game is tied";
}

// attach event listeners to each button
rockButton.addEventListener("click", () => {
  playround("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playround("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playround("scissors", getComputerChoice());
});
