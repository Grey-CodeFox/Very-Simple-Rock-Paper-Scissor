const rockWins = './images/rock-wins-scissor.png'
const paperWins = './images/paper-wins-rock.png'
const scissorWins = './images/scissor-wins-paper-fight.png'

const paperAlone = 'url("./images/paper-removebg-preview.png")'
const rockAlone = 'url("./images/rock-removebg-preview.png")'
const scissorAlone = 'url("./images/scissor-removebg-preview.png")'

const allHands = ['rock', 'paper', 'scissor']

const rockPaperScissor = './images/rock-paper-scissor-removebg-preview.png'

let playerScore = 0
let computerScore = 0
let computerHand = 0

let button = document.querySelectorAll('.btn-play')

button.forEach((btn) => {
  btn.addEventListener('click', playerHand)
})

const userDisplay = document.getElementById('user-score')
const compDisplay = document.getElementById('comp-score')

const playerImage = document.getElementById('img-player')
const computerImage = document.getElementById('img-comp')

function playerHand(e) {
  let currentPlayerHand = e.currentTarget.textContent.trim().toLowerCase()
  //   RANDOM COMPUTER HAND GENERATION

  computerHand = Math.floor(Math.random() * 3)

  //   WINNING CONDITION CODE

  if (
    (currentPlayerHand === 'rock' && allHands[computerHand] === 'scissor') ||
    (currentPlayerHand === 'paper' && allHands[computerHand] === 'rock') ||
    (currentPlayerHand === 'scissor' && allHands[computerHand] === 'paper')
  ) {
    playerScore += 1
    userDisplay.textContent = 'Score: ' + playerScore
  } else if (
    (allHands[computerHand] === 'rock' && currentPlayerHand === 'scissor') ||
    (allHands[computerHand] === 'paper' && currentPlayerHand === 'rock') ||
    (allHands[computerHand] === 'scissor' && currentPlayerHand === 'paper')
  ) {
    computerScore += 1
    compDisplay.textContent = 'Score: ' + computerScore
  }

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
}
