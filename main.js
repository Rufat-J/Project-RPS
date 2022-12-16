let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const winLose_p = document.querySelector(".winLose > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let choices = document.querySelector(".choices-wrapper");
let message = document.querySelector("#message");
const form = document.getElementById("form");
const uuserName = document.getElementById("uuserName");
const avatarName = document.querySelector("avatarName");
const overlay = document.querySelector("overlay1");
const gridContainer = document.querySelector(".grid-container");
const bestOf3 = document.querySelector(".bestOf3");
const bestOfwrap = document.querySelector(".bestOfwrap");
const bestOfwrap2 = document.querySelector("bestOfwrap2");
const bestOf = document.querySelector(".bestOf");
let gameMode = document.querySelector(".gameMode");
const sten = document.querySelector("#Sten");
const påse = document.querySelector("#Påse");
const sax = document.querySelector("#Sax");
const sten2 = document.querySelector("#Sten2");
const påse2 = document.querySelector("#Påse2");
const sax2 = document.querySelector("#Sax2");
const change = document.querySelector('#changeAvatar')



let userScore = 0;
let computerScore = 0;

const bestOf5 = document.querySelector(".bestOf5");

bestOf5.addEventListener("click", bestof5);

reset = document.querySelector("#reset");

function ressset() {
  computerScore_span.innerHTML = 0;
  userScore_span.innerHTML = 0;
  userScore = 0;
  computerScore = 0;
  userScore_span.style.color = "white";
  computerScore_span.style.color = "white";
  result_p.innerHTML = " ";
  winLose_p.innerHTML = " ";
  result_p.innerHTML = "LETS PLAY";
  choices.style.display = "flex";
  bestOf.style.display = "none";
  message.innerHTML = "Pick your choice";
  påse.style.display = "none";
  sax.style.display = "none";
  sten.style.display = "none";
  påse2.style.display = "none";
  sax2.style.display = "none";
  sten2.style.display = "none";
  if (bestOf3.checked) {
    gameMode.innerHTML = "best of 3";
  } else if (bestOf5.checked) {
    gameMode.innerHTML = "best of 5";
  }
}

function bestof3() {
  if ((userScore == 2) & (userScore > computerScore)) {
    result_p.innerHTML = uuserName.value + " WINS";
    choices.style.display = "none";
    message.innerHTML = "Game Over";
    gameMode.innerHTML = " ";
    bestOf.style.display = "flex";
  } else if ((computerScore == 2) & (computerScore > userScore)) {
    result_p.innerHTML = "Computer WINS";
    choices.style.display = "none";
    message.innerHTML = "Game Over";
    gameMode.innerHTML = " ";
    bestOf.style.display = "flex";
  }
}

function bestof5() {
  if ((userScore == 3) & (userScore > computerScore)) {
    result_p.innerHTML = uuserName.value + " WINS";
    choices.style.display = "none";
    message.innerHTML = "Game Over";
    gameMode.innerHTML = " ";
    bestOf.style.display = "flex";
  } else if ((computerScore == 3) & (computerScore > userScore)) {
    result_p.innerHTML = "Computer WINS";
    choices.style.display = "none";
    message.innerHTML = "Game Over";
    bestOf.style.display = "flex";

    gameMode.innerHTML = " ";
  }
}

function getComputerChoice() {
  let choices = ["r", "p", "s"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter) {
  påse.style.display = "none";
  sax.style.display = "none";
  sten.style.display = "none";

  if (letter === "r") {
    sten.style.display = "block";
  }
  if (letter === "p") {
    påse.style.display = "block";
  }

  if (letter === "s") {
    sax.style.display = "block";
  }
}

function convertToWord2(letter) {
  påse2.style.display = "none";
  sax2.style.display = "none";
  sten2.style.display = "none";

  if (letter === "r") {
    sten2.style.display = "block";
  }

  if (letter === "p") {
    påse2.style.display = "block";
  }

  if (letter === "s") {
    sax2.style.display = "block";
  }
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  convertToWord(user) + +convertToWord2(computer);
  result_p.innerText = " beats ";
  winLose_p.innerHTML = "YOU WIN";
  winLose_p.style.color = "rgb(50, 165, 58)";

  if (bestOf3.checked) {
    bestof3();
  } else if (bestOf5.checked) {
    bestof5();
  }
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  convertToWord(user) + convertToWord2(computer);
  result_p.innerHTML = " loses to ";
  winLose_p.innerHTML = "YOU LOSE";
  winLose_p.style.color = "rgba(200, 20, 50, 0.8)";
  if (bestOf3.checked) {
    bestof3();
  } else if (bestOf5.checked) {
    bestof5();
  }
}

function draw(user, computer) {
  convertToWord(user) + convertToWord2(computer);
  result_p.innerHTML = " is equal to ";
  winLose_p.innerHTML = "IT´S A DRAW";
  winLose_p.style.color = "orange";
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
  if (userScore > computerScore) {
    userScore_span.style.color = "rgb(50, 165, 58)";
    computerScore_span.style.color = "rgba(200, 20, 50, 0.8)";
  } else if (userScore === computerScore) {
    userScore_span.style.color = "white";
    computerScore_span.style.color = "white";
  } else {
    userScore_span.style.color = "rgba(200, 20, 50, 0.8)";
    computerScore_span.style.color = "rgb(50, 165, 58)";
  }
}

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

let nav1 = document.querySelectorAll(".nav1");
let body = document.querySelector("body");

const audio = new Audio();
audio.src = "beep.mp3";

function clickSound() {
  audio.play();
}

function stone() {
  const stone = document.getElementById("stone");
  stone.play();
  stone.volume = 0.3;
}

function scissors() {
  const scissors = document.getElementById("scissors");
  scissors.play();
  audio.volume;
}

function paper() {
  const paper = document.getElementById("paper");
  paper.play();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const uuserNameValue = uuserName.value;
  document.querySelector(".overlay1").style.display = "none";
  document.querySelector("#uuserName1").textContent = uuserName.value;
});

const female = document.querySelector("#female");
const male = document.querySelector("#male");
const femaleAvatar = document.querySelector("#Female-checked");

const maleAvatar = document.querySelector("#Male-checked");

maleAvatar.addEventListener("change", function () {
  if (maleAvatar.checked) {
    female.style.display = "none";
    male.style.display = "flex";
  }
});

femaleAvatar.addEventListener("change", function () {
  if (femaleAvatar.checked) {
    male.style.display = "none";
    female.style.display = "flex";
  }
});


change.addEventListener('click', function() {
  document.querySelector(".overlay1").style.display = "flex";
})