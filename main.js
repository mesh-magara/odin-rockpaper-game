//rock paper scissors game
const output = document.querySelector(".output");

//get computer choice
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//keeping the scores
let human_score = 0;
let computer_score = 0;

//Each play round
function playround(human_choice, computer_choice) {
  const resultDiv = document.createElement("div");
  const playersSelections = document.createElement("p");
  resultDiv.appendChild(playersSelections);
  playersSelections.textContent = `you : ${human_choice}     opponent : ${computer_choice}`;

  //choice comparison
  if (
    (human_choice === "paper" && computer_choice === "rock") ||
    (human_choice == "rock" && computer_choice == "scissors") ||
    (human_choice == "scissors" && computer_choice == "paper")
  ) {
    human_score += 1;
    resultDiv.style.background = "blue";
  } else if (human_choice == computer_choice) {
    console.log("tie game");
    resultDiv.style.background = "green";
  } else {
    computer_score += 1;
    resultDiv.style.background = "red";
  }

  //appending the score to the body
  const roundResult = document.createElement("p");
  resultDiv.appendChild(roundResult);
  roundResult.textContent = `you : ${human_score}   opponent : ${computer_score}`;

  //apending the result to the output container
  output.appendChild(resultDiv);
}

function getWinner(human_score, computer_score) {
  let max_rounds = 5;
  if (human_score == max_rounds || computer_score == max_rounds) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
    const result = document.createElement("div");
    result.style.display = "flex";
    result.style.justifyContent = "center";
    result.style.flexDirection = "column";
    result.style.gap = "1.5rem";
    result.style.alignItems = "center";

    const game = document.createElement("h2");
    result.appendChild(game);
    game.textContent = "Game End!!!!!!";

    output.appendChild(result);
    const win = document.createElement("h1");
    win.style.color = "red";

    result.appendChild(win);

    if (human_score == 5) {
      win.textContent = "you win congrat!!";
      result.style.background = "darkblue";
      win.style.color = "white";
    } else {
      win.textContent = "Opponent wins";
      win.style.color = "red";
      result.style.background = "darkred";
    }
  }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    human_choice = button.textContent;
    const computer_choice = computerChoice();
    playround(human_choice, computer_choice);
    getWinner(human_score, computer_score);
  });
});

