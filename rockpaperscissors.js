let randomNumber = Math.random();

function getComputerChoice() {
  
  if(randomNumber<0.3333) {
  return "Scissors"; 
  } else if(randomNumber>0.6666) {
  return "Rock"; 
  } else {
  return "Paper"; 
  }
}

console.log(getComputerChoice(randomNumber));

let humanChoice = prompt("Choose Rock, Paper or Scissors", "Rock");

function getHumanChoice() {

  if(humanChoice==="Rock") {
  return "Rock";
  } else if(humanChoice==="Scissors") {
  return "Scissors"; 
  } else if (humanChoice==="Paper") {
  return "Paper"; 
  }
  else {
  alert("Insert either Rock, Paper or Scissors");
  }
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

  if(humanselection=computerSelection) {
  alert("Tie");
  } else if(humanSelection="Rock" && computerSelection="Scissors") {
  return humanScore+1;
  } else if(humanSelection="Scissors" && computerSelection="Paper") {
  return humanScore+1;
  } else if(humanSelection="Paper" && computerSelection="Rock")  {
  return humanScore+1;
  } else {
  return computerScore+1;
  alert("You lose.");
  }
}	 
