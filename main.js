const plays = [
    "rock",
    "paper",
    "scissors"
]

function getComputerChoice() {
    return plays[Math.floor(Math.random() * plays.length)]
}

function getHumanChoice() {
    let input = prompt("What will you play?").toLowerCase();
    console.log("you chose " + input)
    return input
}

function printChoices(humanChoice, computerChoice) {
    console.log("You played: " + humanChoice)
    console.log("I play: " + computerChoice)
}

function playRound() {
    let computerChoice  = getComputerChoice()
    let humanChoice = getHumanChoice()

    printChoices(humanChoice, computerChoice)

    if (humanChoice === computerChoice) {
        console.log("It's a draw!")
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You won!")
            return 1
        }
        console.log("You lost!")
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won!")
            return 1
        }
        console.log("You lost!")
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You won!")
            return 1
        }
        console.log("You lost!")
    }
    return 0
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        if (playRound() === 1) {
            playerScore += 1
        }
        else {
            computerScore += 1
        }
    }
    console.log("Game Over")
    console.log("Player Score: " + playerScore)
    console.log("Computer Score: " + computerScore)
}

let playerScore = 0
let computerScore = 0

playGame()

