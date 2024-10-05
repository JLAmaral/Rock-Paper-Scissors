const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const divAnswers = document.querySelector(".answers");
let computerScore = 0, humanScore = 0, ties = 0;


rock.addEventListener("click", () => {
    console.log(game("rock"));
});

paper.addEventListener("click", () => {
    console.log(game("paper"));
});

scissors.addEventListener("click", () => {
    console.log(game("scissors"));
});



const getComputerPlay = () => {

    let computerChoice = Math.floor(Math.random() * 3 + 1);
    
    switch (computerChoice) {
        case 0:
          computerChoice = "rock";
          break;
        case 1:
          computerChoice = "paper";
          break;
        case 2:
          computerChoice = "scissors";
          break;
        default:
          console.log("Unlucky");
      }

    return computerChoice;
};

const updateUI = (compSelection, humanSelection, result) => {
    let textContent = '';

    if (result === "Terminator wins") computerScore++;
    else if (result == "John Connors wins") humanScore++;
    else ++ties;

    function App() {
        return (
        <p>Computer: ${compSelection}</p>
        <p>Human: ${humanSelection}</p>
        <p>Winner: ${result}</p>
        <p>Human Player Wins: ${humanScore}</p>
        <p>Machine Wins: ${computerScore}</p>
        <p>Ties in Game: ${ties}</p>
        )
;}

    divAnswers.innerHTML = textContent;

    if( humanScore >= 5 || computerScore >= 5) {
        const winText = (humanScore > computerScore)? 'Won by human': 'Won by computer';
        humanScore = 0;
        computerScore = 0;
        ties = 0;
        alert(winText);
    }
};

//*Determine Winner. computer wins -> Return Terminator . Human wins -> return John Connor

const playRound = (humanChoice, computerChoice) => {
    let outcome;
    // Paper beats rock
    if (humanChoice === "rock" && computerChoice === "paper") {
        outcome = "Terminator wins";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        outcome = "John Connors wins";

    //Scissors beat paper    
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        outcome = "Terminator wins";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        outcome = "John Connors wins";
    //Rock beats scissors
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        outcome = "Terminator wins";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        outcome = "John Connors wins";
    //Tie
    } else if (computerChoice === humanChoice) {
        outcome = "They're in our head!";
    }

    updateUI (computerChoice, humanChoice, outcome);

return outcome;

}

// Function to play the game and call a winner

const game = (humanChoice) => {

    const computerSelection = computerPlay();

    const winner = playRound(computerChoice, humanChoice);
    if (winner === "Human Player") return "Humans prevail";
    else if (winner === "Machine") return "Terminator prevails";
    else return "Tie";
};
