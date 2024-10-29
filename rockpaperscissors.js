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

  if(humanChoice=="Rock") {
  return "Rock";
  } else if(humanChoice=="Scissors") {
  return "Scissors"; 
  } else if (humanChoice=="Paper") {
  return "Paper"; 
  } else {
  alert("Insert either Rock, Paper or Scissors");
  }
}

console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound() {

  if(humanSelection===computerSelection) {
  alert("Tie");
  } else if(humanSelection==="Rock" && computerSelection==="Scissors") {
  return ++humanScore;
  } else if(humanSelection==="Scissors" && computerSelection==="Paper") {
  return ++humanScore;
  } else if(humanSelection==="Paper" && computerSelection==="Rock")  {
  return ++humanScore;
  } else {
  return ++computerScore && alert("You lose.");
  }
}	 

playRound();

console.log(humanScore);
console.log(computerScore);