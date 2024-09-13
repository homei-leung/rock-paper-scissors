// Access nodes in the DOM
const button = document.querySelectorAll("button");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playAgain = document.querySelector("#play-again");
playAgain.style.display = "none";
const body = document.querySelector("body");

const resultDiv = document.createElement("div");
const roundUpdate = document.createElement("p");
const scoreUpdate = document.createElement("p");
const currentRound = document.createElement("p");
const result = document.createElement("p");
resultDiv.textContent = "Use the buttons to make a selection for playing rock, paper, scissors."
resultDiv.appendChild(roundUpdate);
resultDiv.appendChild(scoreUpdate);
resultDiv.appendChild(currentRound);
resultDiv.appendChild(result);
body.insertBefore(resultDiv, rock);

// Create a function named getComputerChoice
function getComputerChoice() {
    // Randomly select a value and store it in a variable
    let choice = Math.random();
    // if the value is <= 0.33, return "rock"
    // if the value is between 0.33 and 0.66, return "paper"
    // if the value is >= 0.66, return "scissors"
    if (choice <= 0.33) {
        return "rock";
    }else if (choice >= 0.66) {
        return "scissors";
    }else {
        return "paper";
    }
}

// Initialize player score variables
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let rounds = 0;

// Write a function to play a single round
function playRound(humanChoice, computerChoice) {

    // Paper beats rock
    // Rock beats scissors
    // Scissors beats Paper
    // Draw if equal
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        roundUpdate.textContent = `You lose! You selected ${humanChoice} and the computer selected ${computerChoice}.`
    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        roundUpdate.textContent = `You lose! You selected ${humanChoice} and the computer selected ${computerChoice}.`
    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundUpdate.textContent = `You lose! You selected ${humanChoice} and the computer selected ${computerChoice}.`
    }else if (humanChoice === computerChoice) {
        drawScore++;
        roundUpdate.textContent = `Draw! You selected ${humanChoice} and the computer selected ${computerChoice}.`;
    } else {
        humanScore++;
        roundUpdate.textContent = `You win! You selected ${humanChoice} and the computer selected ${computerChoice}.`;
    }

    scoreUpdate.textContent = `You: ${humanScore}, Computer: ${computerScore}, Draws: ${drawScore}`
}

// Track and update round information
function trackRound() {
    rounds++;

    currentRound.textContent = `Round ${rounds} out of 5`;

    // Determine winner of game on the last round
    if (rounds === 5) {
        if (humanScore > computerScore) {
            result.textContent = "You won the game!";
        }else if (humanScore === computerScore) {
            result.textContent = "It's a draw.";
        }else {
            result.textContent = "You lost the game."
        }

        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        playAgain.style.display = "";
    }
}

// Reset rounds and score after the 5th round
function resetGame(){
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    drawScore = 0;
    result.textContent = "";
    roundUpdate.textContent = "";
    scoreUpdate.textContent = "";
    currentRound.textContent = "";
    rock.style.display = "";
    paper.style.display = "";
    scissors.style.display = "";
    playAgain.style.display = "none";
}



button.forEach((button) => {
    button.addEventListener("click", (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();

    switch(target.id) {
        case 'rock':
            humanChoice = "rock";
            break;
        case 'paper':
            humanChoice = "paper";
            break;
        case 'scissors':
            humanChoice = "scissors";
            break;
    }

    playRound(humanChoice, computerChoice);
    trackRound();
    });
});

playAgain.addEventListener("click", () => {
    resetGame();
})
