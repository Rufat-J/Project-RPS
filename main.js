let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const winLose_p = document.querySelector(".winLose > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



/*
document.getElementById("button").onclick = function() {
  name = document.getElementById("myText").value;
  document.getElementById("firstName").innerHTML = name;
}*/

/*const userinput = document.getElementById("userinput").value;*/


let userScore = 0;
let computerScore = 0;

reset = document.querySelector('#reset')


function ressset() {
  console.log("hej")
  computerScore_span.innerHTML = 0;
  userScore_span.innerHTML = 0;
  userScore = 0;
  computerScore = 0;
  userScore_span.style.color = 'white'
  computerScore_span.style.color = 'white'
  result_p.innerHTML = ' '
  winLose_p.innerHTML = ' '
  result_p.innerHTML = "LETS PLAY";
}

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

const wow = ":"

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(user) + " beats " + convertToWord(computer);
  winLose_p.innerHTML = "YOU WIN";
  winLose_p.style.color = 'rgb(50, 165, 58)'

}
function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(user) + " loses to " + convertToWord(computer);
  winLose_p.innerHTML = "YOU LOSE";
  winLose_p.style.color = 'rgba(200, 20, 50, 0.8)'
  
}




function draw(user, computer) {

  result_p.innerHTML =
    convertToWord(user) + " is equal to " + convertToWord(computer);
  winLose_p.innerHTML = "IT´S A DRAW";
  winLose_p.style.color = 'orange'
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
    userScore_span.style.color = 'rgb(50, 165, 58)'
    computerScore_span.style.color = 'rgba(200, 20, 50, 0.8)'
  } else if (userScore === computerScore){
    userScore_span.style.color = 'white'
    computerScore_span.style.color = 'white'
  } 
  else  {
    userScore_span.style.color = 'rgba(200, 20, 50, 0.8)'
    computerScore_span.style.color = 'rgb(50, 165, 58)'
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



 /*  const userName = localStorage.getItem('user-Name') */

 /*  document.getElementById("user-Name").textContent = userName; */

main();


let nav1 = document.querySelectorAll('.nav1')
let body = document.querySelector('body')
/* let audio = document.querySelector('#audio') */


const audio = new Audio();
audio.src = "beep.mp3";

function clickSound() {

  audio.play()
}



function stone () {
  const stone = document.getElementById('stone')
  stone.play()
  stone.volume = 0.3
}

function scissors () {
  const scissors = document.getElementById('scissors')
  scissors.play()
  audio.volume
}


function paper () {
  const paper = document.getElementById('paper')
  paper.play()
}



{/* <div class="avatars">
<img id="avatar-male" src="avatar1.png" alt="avatar male">
<input class="checkbox" type="checkbox">
<img src="avatar2.png" alt="avatar female">
</div> */}


const form = document.getElementById("form");
const uuserName = document.getElementById("uuserName");
const avatarName = document.querySelector('avatarName')
const overlay = document.querySelector('overlay1')
const gridContainer = document.querySelector('.grid-container')

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const uuserNameValue = uuserName.value;
    document.querySelector('.overlay1').style.display = 'none'
    document.querySelector('#uuserName1').textContent = uuserName.value;
   /*  gridContainer.style.display = 'grid' */
  


});

const female = document.querySelector('#female')
const male = document.querySelector('#male')
const femaleAvatar= document.querySelector('#Female-checked')

const maleAvatar = document.querySelector('#Male-checked')

maleAvatar.addEventListener ('change', function() {
    if (maleAvatar.checked) {
        female.style.display = 'none'
        male.style.display = 'flex'
    }
})

femaleAvatar.addEventListener('change', function() {
    if(femaleAvatar.checked) {
        male.style.display ='none'
        female.style.display= 'flex'
        }     
    })


onOffBtn = document.querySelector('.onOffBtn')

onOffBtn.addEventListener('click', onOffBtn)

function onOff() {
  console.log("Hej")
  if (onOff.checked){
    console.log("Hej")
    title.style.display = 'none'
   
    
  } else {
    title.style.display = 'inline'
  
  
  }
}