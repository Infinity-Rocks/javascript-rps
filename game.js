function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outcome = "";

    playerOutcome = playerSelection.split("");
    playerOutcome[0] = playerOutcome[0].toUpperCase();
    playerOutcome = playerOutcome.join("");

    computerOutcome = computerSelection.split("");
    computerOutcome[0] = computerOutcome[0].toUpperCase();
    computerOutcome = computerOutcome.join("");

    console.log(playerSelection);

    if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) {
        outcome = `You Win! ${playerOutcome} beats ${computerOutcome}`;
    }
    else if (playerSelection == computerSelection) {
        outcome = "Nobody Wins! It's a Tie";
    }
    else {
        outcome = `You Lose! ${computerOutcome} beats ${playerOutcome}`;
    }

    return outcome
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    const container = document.createElement("div");
    const title = document.createElement("h2");
    const subTitle = document.createElement("h4");
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");
    const myDiv = document.createElement("div");
    const printDiv = document.createElement("div");
    const printScores = document.createElement("div");
    const printSelection = document.createElement("div");
    const printOutcome = document.createElement("div");
    const userScoreCounter = document.createElement("div");
    const computerScoreCounter = document.createElement("div");
    const computerSelectionPlaceholder = document.createElement("div");
    const userSelectionPlaceholder = document.createElement("div");
    const winRegex = new RegExp("\\b" + "Win" + "\\b", "i");
    const loseRegex = new RegExp("\\b" + "Lose" + "\\b", "i");

    let outcome = "";
    let playerSelection = "";
    let computerChoice = "";

    title.textContent = "Rock, Paper and Scissor Game!!";
    subTitle.textContent = "Choose Your Option: ";

    title.style.fontSize = "40px";
    subTitle.style.fontSize = "30px";

    container.appendChild(title);
    container.appendChild(subTitle);

    myDiv.appendChild(rockBtn);
    myDiv.appendChild(paperBtn);
    myDiv.appendChild(scissorBtn);

    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.height = "100vh";
    container.style.width = "100%";
    container.style.marginTop = "-20px";

    myDiv.style.display = "flex";
    myDiv.style.alignItems = "center";
    myDiv.style.gap = "80px";

    rockBtn.style.fontSize = "24px";
    rockBtn.style.borderRadius = "10px";
    rockBtn.style.color = "white";
    rockBtn.style.backgroundColor = "firebrick";
    rockBtn.style.border = "none";

    paperBtn.style.fontSize = "24px";
    paperBtn.style.borderRadius = "10px";
    paperBtn.style.backgroundColor = "white";
    paperBtn.style.border = "none";

    scissorBtn.style.fontSize = "24px";
    scissorBtn.style.borderRadius = "10px";
    scissorBtn.style.color = "white";
    scissorBtn.style.backgroundColor = "gray";
    scissorBtn.style.border = "none";

    printOutcome.style.fontWeight = 600;

    printDiv.style.display = "flex";
    printDiv.style.flexDirection = "column";
    printDiv.style.gap = "60px";
    printDiv.style.marginTop = "50px";
    printDiv.style.fontSize = "24px";

    printSelection.appendChild(computerSelectionPlaceholder);
    printSelection.appendChild(userSelectionPlaceholder);

    printScores.appendChild(userScoreCounter);
    printScores.appendChild(computerScoreCounter);

    printDiv.appendChild(printSelection);
    printDiv.appendChild(printOutcome);
    printDiv.appendChild(printScores);

    container.appendChild(myDiv)
    container.appendChild(printDiv);

    document.body.appendChild(container);

    function updateScores() {
        computerChoice = computerChoice.split("");
        computerChoice[0] = computerChoice[0].toUpperCase();
        computerChoice = computerChoice.join("");

        computerSelectionPlaceholder.textContent = "Computer selected: " + computerChoice;
        userSelectionPlaceholder.textContent = "User selected: " + playerSelection;
        userScoreCounter.textContent = "User score is: " + userScore;
        computerScoreCounter.textContent = "Computer score is: " + computerScore;

        if (userScore === 5 || computerScore === 5) {
            alert("Game Over! " + (userScore === 5 ? "You win!" : "Computer wins!"));
            location.reload();
        }
    }

    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorBtn.textContent = "Scissor";

    rockBtn.addEventListener("click", () => {
        playerSelection = "Rock";
        computerChoice = getComputerChoice();
        outcome = playRound(playerSelection, computerChoice);
        printOutcome.textContent = outcome;
        if (winRegex.test(outcome)) {
            userScore += 1;
        } else if (loseRegex.test(outcome)) {
            computerScore += 1;
        }
        updateScores();
    });

    paperBtn.addEventListener("click", () => {
        playerSelection = "Paper";
        computerChoice = getComputerChoice();
        outcome = playRound(playerSelection, computerChoice);
        printOutcome.textContent = outcome;
        if (winRegex.test(outcome)) {
            userScore += 1;
        } else if (loseRegex.test(outcome)) {
            computerScore += 1;
        }
        updateScores();
    });

    scissorBtn.addEventListener("click", () => {
        playerSelection = "Scissor";
        computerChoice = getComputerChoice();
        outcome = playRound(playerSelection, computerChoice);
        printOutcome.textContent = outcome;
        if (winRegex.test(outcome)) {
            userScore += 1;
        } else if (loseRegex.test(outcome)) {
            computerScore += 1;
        }
        updateScores();
    });
}

playGame()