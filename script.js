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

// Create a function named getHumanChoice
function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Rock, paper, scissors, shoot! Choose your action:");
    }
    // While the input is not "rock", "paper", or "scissors", continue prompt
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

// Initialize player score variables
let humanScore = 0;
let computerScore = 0;

// Write a function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    let anyCase = humanChoice.toLowerCase();
    // Paper beats rock
    // Rock beats scissors
    // Scissors beats Paper
    // Draw if equal
    if (anyCase === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";
    }else if (anyCase === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    }else if (anyCase === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper.";
    }else if (anyCase === computerChoice) {
        return "Draw!";
    } else {
        humanScore++;
        return "You win!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Log playRound function
console.log(playRound(humanSelection, computerSelection));