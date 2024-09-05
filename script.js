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

// log what getComputerChoice does in the console
console.log(getComputerChoice());

// Create a function named getHumanChoice
function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Rock, paper, scissors, shoot! Choose your action:");
    }
    // while the input is not "rock", "paper", or "scissors", continue prompt
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}


// log what getHumanChoice does in the console
console.log(getHumanChoice());