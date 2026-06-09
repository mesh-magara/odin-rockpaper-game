console.log("Welcome to Odin's Rock Paper Scissors Game!");

//gets a computer choice
function getComputerChoice() {
  let number = Math.floor(Math.random() * 10);
  option_number = Math.floor(number / 4);

  if (option_number == 0) {
    return "rock";
  } else if (option_number == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//get the human choice
function getHumanChoice() {
  choice = choice.toLowerCase().trim();
  return choice;
}

//initial scores before playing

human_score = 0;
computer_score = 0;

//function to determine the winner for each play round
const resultList = document.querySelector("ul");
const li = document.createElement("li");
const span = document.createElement("li");
const score = document.createElement("li");
const winner = document.createElement("li");

function playround(human_choice, computer_choice) {
  //logic to determine winner
  span.textContent = `YOU = ${human_choice} :  OPPONENT = ${computer_choice}`;
  resultList.appendChild(span);
  switch (human_choice) {
    case "rock":
      if (computer_choice === "rock") {
        li.textContent = "Tie Game";
        resultList.appendChild(li);
      } else if (computer_choice === "scissors") {
        human_score += 1;
        li.textContent = "rock beats scissors";
        resultList.appendChild(li);
      } else {
        computer_score += 1;
        li.textContent = "paper beats rock";
        resultList.appendChild(li);
      }
      break;

    case "paper":
      if (computer_choice === "paper") {
        li.textContent = "Tie Game";
        resultList.appendChild(li);
      } else if (computer_choice === "scissors") {
        computer_score += 1;
        li.textContent = "scissors beat paper";
        resultList.appendChild(li);
      } else {
        human_score += 1;
        li.textContent = "paper beats rock";
        resultList.appendChild(li);
      }
      break;

    case "scissors":
      if (computer_choice === "scissors") {
        li.textContent = "Tie Game";
        resultList.appendChild(li);
      } else if (computer_choice === "rock") {
        computer_score += 1;
        li.textContent = "rock beats scissors";
        resultList.appendChild(li);
      } else {
        human_score += 1;
        li.textContent = "scissors beats paper";
        resultList.appendChild(li);
      }
      break;
    default:
      console.log("Invalid choice");
  }

  score.textContent = `YOU: ${human_score} : OPPONENT : ${computer_score}`;
  resultList.appendChild(score);

  if (human_score === 5) {
    winner.textContent = "You win";
    resultList.appendChild(winner);
  } else if (computer_score == 5) {
    winner.textContent = "opponent wins ";
    resultList.append(winner);
  }
}

//determining the winner
function getwinner() {
  if (computer_score > human_score) {
    return "The winner is Computer";
  } else if (human_score > computer_score) {
    return "The winner is Human";
  } else {
    return "tied game";
  }
}

//adding ui
const rock = document.createElement("button");
rock.textContent = "rock";
const paper = document.createElement("button");
paper.textContent = "paper";
const scissors = document.createElement("button");
scissors.textContent = "scissors";

rock.addEventListener("click", () => {
  human_choice = "rock";
  computer_choice = getComputerChoice();

  playround(human_choice, computer_choice);
});

paper.addEventListener("click", () => {
  human_choice = "paper";
  computer_choice = getComputerChoice();

  playround(human_choice, computer_choice);
});

scissors.addEventListener("click", () => {
  human_choice = "scissors";
  computer_choice = getComputerChoice();

  playround(human_choice, computer_choice);
});

const div = document.querySelector("div");
div.append(rock, paper, scissors);
