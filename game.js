function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outcome = "";

    if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) {
        outcome = `You Win!, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == computerSelection) {
        outcome = "Nobody Wins!, it's a Tie";
    }
    else {
        outcome = `You Lose!, ${computerSelection} beats ${playerSelection}`;
    }

    return outcome
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose a selection: Rock, Paper or Scissor");
        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection);
        console.log(outcome);
    }
}

playGame()