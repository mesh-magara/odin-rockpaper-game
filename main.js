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
  let choice = window.prompt("enter you choice rock , paper or scissors");
  choice = choice.toLowerCase().trim();

  return choice;
}

//initial scores before playing

human_score = 0;
computer_score = 0;

//function to determine the winner for each play round

function playround(human_choice, computer_choice) {
  console.log(
    `computer-choice = ${computer_choice} human-choice = ${human_choice}`,
  );
  //logic to determine winner
  switch (human_choice) {
    case "rock":
      if (computer_choice === "rock") {
        console.log("tie game");
      } else if (computer_choice === "scissors") {
        human_score += 1;
        console.log("rock beats scissors");
      } else {
        computer_score += 1;
        console.log("paper beats rock");
      }
      break;

    case "paper":
      if (computer_choice === "paper") {
        console.log("tie game");
      } else if (computer_choice === "scissors") {
        computer_score += 1;
        console.log("scissors beats paper");
      } else {
        human_score += 1;
        console.log("paper beats rock");
      }
      break;

    case "scissors":
      if (computer_choice === "scissors") {
        console.log("tie game");
      } else if (computer_choice === "rock") {
        computer_score += 1;
        console.log("rock beats scissors");
      } else {
        human_score += 1;
        console.log("scissors beats paper");
      }
      break;
    default:
      console.log("Invalid choice");
  }
}

//function to play rounds(each play round)
function playgame() {
  let i = 0;
  while (i < 5) {
    computer_choice = getComputerChoice();
    human_choice = getHumanChoice();
    playround(human_choice, computer_choice);
    ++i;
  }
}

plays = playgame();
console.log(
  `computer_Score : ${computer_score} and  human_score : ${human_score}`,
);

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

winner = getwinner();
console.log(winner);
