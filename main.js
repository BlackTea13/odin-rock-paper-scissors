const plays = [
    "rock",
    "paper",
    "scissors"
]

let humanScore = 0
let computerScore = 0

let humanScoreSpan = document.querySelector(".scores .human-score-point")
let computerScoreSpan= document.querySelector(".scores .computer-score-point")

let humanPlaySpan = document.querySelector(".plays .human-play")
let computerPlaySpan = document.querySelector(".plays .computer-play")

let resultSpan = document.querySelector(".result")

function incrementScore(isHumanScore) {
    if (isHumanScore) {
        humanScore += 1
        let currentScore = parseInt(humanScoreSpan.textContent)
        humanScoreSpan.textContent = (currentScore + 1).toString()
    }
    else {
        computerScore += 1
        let currentScore = parseInt(computerScoreSpan.textContent)
        computerScoreSpan.textContent = (currentScore + 1).toString()
    }
}

function getComputerChoice() {
    return plays[Math.floor(Math.random() * plays.length)]
}

function getHumanChoice(event) {
    return event.target.textContent.toLowerCase()
}

function displayPlays(humanPlay, computerPlay) {

    humanPlaySpan.textContent = humanPlay
    computerPlaySpan.textContent = computerPlay
}

function playRound(event) {
    let computerChoice  = getComputerChoice()
    let humanChoice = getHumanChoice(event)

    displayPlays(humanChoice, computerChoice)

    if (humanChoice === computerChoice) {
        return
    }

    let rockWin = humanChoice === "rock" && computerChoice === "scissors"
    let paperWin = humanChoice === "paper" && computerChoice === "rock"
    let scissorsWin = humanChoice === "scissors" && computerChoice === "paper"

    if ( rockWin || paperWin || scissorsWin ) {
        incrementScore(true)
    }
    else {
        incrementScore(false)
    }

    checkGameOver()

    return 0

}

function checkGameOver() {
    if (humanScore < 5 && computerScore < 5) {
        resultSpan.textContent = ""
        return
    }

    if (humanScore === 5) {
        resultSpan.textContent = "You Won!"
    }
    else if (computerScore === 5) {
        resultSpan.textContent = "You Lost"
    }

    computerScore = 0
    humanScore = 0

    humanScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
}

document.querySelectorAll("button").forEach((button)=> {
    button.addEventListener("click", playRound)
})



