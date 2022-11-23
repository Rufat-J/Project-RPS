const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const winLose_p = document.querySelector(".winLose > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["r", "p", "s"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(user) + " beats " + convertToWord(computer);
  winLose_p.innerHTML = "YOU WIN";
}
function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(user) + " loses to " + convertToWord(computer);
  winLose_p.innerHTML = "YOU LOSE";
}
function draw(user, computer) {
  result_p.innerHTML =
    convertToWord(user) + " is equal to " + convertToWord(computer);
  winLose_p.innerHTML = "IT´S A DRAW";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (
    userChoice + computerChoice === "rs" ||
    userChoice + computerChoice === "pr" ||
    userChoice + computerChoice === "sp"
  ) {
    win(userChoice, computerChoice);
  } else if (
    userChoice + computerChoice === "rp" ||
    userChoice + computerChoice === "ps" ||
    userChoice + computerChoice === "sr"
  ) {
    lose(userChoice, computerChoice);
  } else if (
    userChoice + computerChoice === "rr" ||
    userChoice + computerChoice === "pp" ||
    userChoice + computerChoice === "ss"
  ) {
    draw(userChoice, computerChoice);
  }
}

// function game(userChoice) {
//   const computerChoice = getComputerChoice();
//   switch (userChoice + computerChoice) {
//     case "rs":
//     case "pr":
//     case "sp":
//       win(userChoice, computerChoice);
//       break;
//     case "rp":
//     case "ps":
//     case "sr":
//       lose(userChoice, computerChoice);
//       break;
//     case "rr":
//     case "pp":
//     case "ss":
//       draw(userChoice, computerChoice);
//       break;
//   }
// }

//game();

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();

