/* Determine a winner based on 5 rounds */
function playGame() {
  let humanScore = 0, computerScore = 0, tie = 0;

  let computerChoice;
  let humanChoice;

  /* Logic for random computer choice */
  const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      computerChoice =  "rock";
    } else if (computerChoice === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  }

  let getHumanChoice = function() {
    humanChoice = prompt("rock, paper, or scissors? ").toLowerCase();
    return humanChoice;
  }

  /* Logic to play individual round. Determine the winner and tally score */
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return `You lost, the computer chose ${computerChoice}.`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return `You won, the computer chose ${computerChoice}.`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return `You lost, the computer chose ${computerChoice}.`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return `You won, the computer chose ${computerChoice}.`;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return `You lost, the computer chose ${computerChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return `You won, the computer chose ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
      tie++;
      return `You both picked ${computerChoice}.`;
    } 
  }
  
  const game = function(humanChoice, computerChoice, humanScore, computerScore) {
    for (let i = 0; i < 5; i++) {
      console.log(playRound(humanChoice, computerChoice));
    }

   if (humanScore > computerScore) {
    return "Humans survive, well done!";
   } else if (computerScore > humanScore) {
    return "The machines advance.";
   } else {
    return "Stalemate, time to regroup.";
   }
  }
  console.log(game());
}

  
  
/* Display winner */ 
/* End */




