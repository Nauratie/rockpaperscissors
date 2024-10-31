function getComputerChoice() { 
  
  let randomNumber = Math.random();

  if(randomNumber<0.3333) {
  return "Scissors"; 
  } else if(randomNumber>0.6666) {
  return "Rock"; 
  } else {
  return "Paper"; 
  }
}

function getHumanChoice() {

  let humanChoice = promptChoice();
  
  function promptChoice() {
  prompt("Choose Rock, Paper or Scissors", "Rock");
  }

  if(humanChoice=="Rock") {
  return "Rock";
  } else if(humanChoice=="Scissors") {
  return "Scissors"; 
  } else if (humanChoice=="Paper") {
  return "Paper"; 
  } else {
  alert("Insert either Rock, Paper or Scissors") && getHumanChoice();
  }
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound() {

  getComputerChoice();
  getHumanChoice();

  if(humanSelection===computerSelection) {
  alert("Tie");
  } else if(humanSelection==="Rock" && computerSelection==="Scissors") {
  return ++humanScore && alert("You win!");
  } else if(humanSelection==="Scissors" && computerSelection==="Paper") {
  return ++humanScore && alert("You win!");
  } else if(humanSelection==="Paper" && computerSelection==="Rock")  {
  return ++humanScore && alert("You win!");
  } else {
  return ++computerScore && alert("You lose.");
  }

  console.log(getComputerChoice());
  console.log(getHumanChoice());
  console.log(humanScore);
  console.log(computerScore);
  return ++round;
}	 

let round = 1

while(round<6) {
  playGame();
}

function playGame () {
  playRound();

  if(round==5) {
  if(humanScore>computerScore) {
    alert("Game over, you won!");
  }
  else {
    alert("Game over, you lost.!");
  }
}
}