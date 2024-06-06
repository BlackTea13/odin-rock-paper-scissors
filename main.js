const plays = [
    "rock",
    "paper",
    "scissors"
]

let humanScoreSpan = document.querySelector(".scores .human-score-point")
let computerScoreSpan= document.querySelector(".scores .computer-score-point")

function incrementScore(isHumanScore) {
    if (isHumanScore) {
        let currentScore = parseInt(humanScoreSpan.textContent)
        humanScoreSpan.textContent = (currentScore + 1).toString()
    }
    else {
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
    let humanPlaySpan = document.querySelector(".result .human-play")
    let computerPlaySpan = document.querySelector(".result .computer-play")

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

    return 0
}

document.querySelectorAll("button").forEach((button)=> {
    button.addEventListener("click", playRound)
})



