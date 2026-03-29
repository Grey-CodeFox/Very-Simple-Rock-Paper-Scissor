const rockWins = "url('./images/rock-wins-scissor.png')"
const paperWins = "url('./images/paper-wins-rock.png')"
const scissorWins = "url('./images/scissor-wins-paper-fight.png')"

const paperAlone = 'url("./images/paper-removebg-preview.png")'
const rockAlone = 'url("./images/rock-removebg-preview.png")'
const scissorAlone = 'url("./images/scissor-removebg-preview.png")'

const celebrationGif = "url('./images/celebration.gif')"

const allHands = ['rock', 'paper', 'scissor']

const rockPaperScissor =
  "url('./images/rock-paper-scissor-removebg-preview.png')"

let playerScore = 0
let computerScore = 0
let computerHand = 0
let currentRound = 0
let internalRound = 0
let button = document.querySelectorAll('.btn-play')

button.forEach((btn) => {
  btn.addEventListener('click', playerHand)
})

const userDisplay = document.getElementById('user-score')
const compDisplay = document.getElementById('comp-score')

const playerImage = document.getElementById('img-player')
const computerImage = document.getElementById('img-comp')

const resultImage = document.querySelector('.result-img')
let textResultImage = document.querySelector('.result-img p')

const computerSquare = document.querySelectorAll(
  '.small-squares-computer .square',
)
const userSquare = document.querySelectorAll('.small-squares-user .square')

function playerHand(e) {
  let currentPlayerHand = e.currentTarget.textContent.trim().toLowerCase()
  //   RANDOM COMPUTER HAND GENERATION

  computerHand = Math.floor(Math.random() * 3)

  //   displaying computer hand

  switch (allHands[computerHand]) {
    case 'rock':
      computerImage.style.backgroundImage = rockAlone
      break
    case 'paper':
      computerImage.style.backgroundImage = paperAlone
      break
    case 'scissor':
      computerImage.style.backgroundImage = scissorAlone
      break
  }

  //   displaying user hand
  switch (currentPlayerHand) {
    case 'rock':
      playerImage.style.backgroundImage = rockAlone
      break
    case 'paper':
      playerImage.style.backgroundImage = paperAlone
      break
    case 'scissor':
      playerImage.style.backgroundImage = scissorAlone
      break
  }

  //   WINNING CONDITION CODE

  if (
    (currentPlayerHand === 'rock' && allHands[computerHand] === 'scissor') ||
    (currentPlayerHand === 'paper' && allHands[computerHand] === 'rock') ||
    (currentPlayerHand === 'scissor' && allHands[computerHand] === 'paper')
  ) {
    computerSquare[internalRound].style.backgroundColor = 'red'
    userSquare[internalRound].style.backgroundColor = 'green'
    currentRound += 1
    textResultImage.textContent = `ROUND ${currentRound} : PLAYER WINS`
    playerScore += 1
    userDisplay.textContent = 'Score: ' + playerScore
    internalRound += 1
  } else if (
    (allHands[computerHand] === 'rock' && currentPlayerHand === 'scissor') ||
    (allHands[computerHand] === 'paper' && currentPlayerHand === 'rock') ||
    (allHands[computerHand] === 'scissor' && currentPlayerHand === 'paper')
  ) {
    currentRound += 1
    textResultImage.textContent = `ROUND ${currentRound} : COMPUTER WINS`
    computerScore += 1
    compDisplay.textContent = 'Score: ' + computerScore
    computerSquare[internalRound].style.backgroundColor = 'green'
    userSquare[internalRound].style.backgroundColor = 'red'
    internalRound += 1
  } else {
    currentRound += 1
    textResultImage.textContent = `ROUND ${currentRound} : TIED`
  }

  // PROECESSING WIN IMAGES
  imageResult(currentPlayerHand, computerHand, allHands)
}

function imageResult(currentPlayerHand, computerHand, allHands) {
  if (
    (currentPlayerHand === 'rock' && allHands[computerHand] === 'scissor') ||
    (allHands[computerHand] === 'rock' && currentPlayerHand === 'scissor')
  ) {
    resultImage.style.backgroundImage = rockWins
    resultImage.style.backgroundPosition = '126px 1px'
    resultImage.style.backgroundSize = '63%'
  } else if (
    (currentPlayerHand === 'paper' && allHands[computerHand] === 'rock') ||
    (allHands[computerHand] === 'paper' && currentPlayerHand === 'rock')
  ) {
    resultImage.style.backgroundImage = paperWins
    resultImage.style.backgroundPosition = '15px -180px'
    resultImage.style.backgroundSize = '63%'
  } else if (
    (currentPlayerHand === 'scissor' && allHands[computerHand] === 'paper') ||
    (allHands[computerHand] === 'scissor' && currentPlayerHand === 'paper')
  ) {
    resultImage.style.backgroundImage = scissorWins
    resultImage.style.backgroundPosition = '116px -18px'
    resultImage.style.backgroundSize = '63%'
  } else {
    resultImage.style.backgroundImage = rockPaperScissor
    resultImage.style.backgroundPosition = '83px 80px'
    resultImage.style.backgroundSize = '63%'
  }
}
