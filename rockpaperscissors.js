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

  let humanChoice;
  
  function promptChoice() {
  return prompt("Choose Rock, Paper or Scissors", "Rock");
  }

  do {
    humanChoice = promptChoice();
  } while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors");

  return humanChoice;
}

let humanScore = 0
let computerScore = 0

function playRound() {

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if(humanSelection===computerSelection) {
  alert("Tie");
  } else if(humanSelection==="Rock" && computerSelection==="Scissors" ||
            humanSelection==="Scissors" && computerSelection==="Paper" ||
            humanSelection==="Paper" && computerSelection==="Rock") {
    humanScore++;
    alert("You win!");
  } else {
    computerScore++;
    alert("You lose.");
  }

  console.log("Computer: ${computerSelection}, Human: ${humanSelection}");
  console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}	 

function playGame () {
  
  for (let round = 1; round<=5; round++) {
    playRound();
  }

  if(humanScore>computerScore) {
    alert("Game over, you won!");
  }
  else {
    alert("Game over, you lost.!");
  }
}

playGame();