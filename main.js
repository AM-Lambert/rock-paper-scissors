function getUserChoice (userInput = userInput.toLowerCase()) {

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    }
    else {
        console.log('Error; please enter rock, paper or scissors.')
    }
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock'
    }
    else if (randomNumber === 1) {
        return 'paper'
    }
    else if (randomNumber === 2) {
        return 'scissors'
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie!'
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'The computer wins!'
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'The computer wins!'
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'The computer wins!'
    }
    else if (userChoice === 'bomb') {
        return ('You destroyed the competition!')
    }
    else return ('You win!')
}
function playGame() {
    let userChoice = getUserChoice('rock')
    let computerChoice = getComputerChoice()

console.log(userChoice)
console.log(computerChoice)
console.log(determineWinner(userChoice, computerChoice))
}

console.log(playGame())


