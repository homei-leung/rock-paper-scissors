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