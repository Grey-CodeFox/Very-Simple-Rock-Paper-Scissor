const rockWins = "url('./images/rock-wins-scissor.png')"
const paperWins = "url('./images/paper-wins-rock.png')"
const scissorWins = "url('./images/scissor-wins-paper-fight.png')"

const paperAlone = 'url("./images/paper-removebg-preview.png")'
const rockAlone = 'url("./images/rock-removebg-preview.png")'
const scissorAlone = 'url("./images/scissor-removebg-preview.png")'

const celebrationGif = "url('./images/celebration.gif')"

const allHands = ['rock', 'paper', 'scissor']
const defaultImage = "url('./images/fight-begins.png')"
const rockPaperScissor = "url('./images/rock-paper-scissor-removebg-preview.png')"

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
resultImage.style.backgroundImage = defaultImage
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

  //   WINNING CONDITION CODE AND COLOR BOX
  if (internalRound < computerSquare.length) {
    if (
      (currentPlayerHand === 'rock' && allHands[computerHand] === 'scissor') ||
      (currentPlayerHand === 'paper' && allHands[computerHand] === 'rock') ||
      (currentPlayerHand === 'scissor' && allHands[computerHand] === 'paper')
    ) {
      computerSquare[internalRound].style.backgroundColor = 'red'
      userSquare[internalRound].style.backgroundColor = 'green'
      currentRound += 1
      playerScore += 1
      internalRound += 1
      textResultImage.textContent = `ROUND ${currentRound} : PLAYER WINS`
      userDisplay.textContent = 'Score: ' + playerScore
    } else if (
      (allHands[computerHand] === 'rock' && currentPlayerHand === 'scissor') ||
      (allHands[computerHand] === 'paper' && currentPlayerHand === 'rock') ||
      (allHands[computerHand] === 'scissor' && currentPlayerHand === 'paper')
    ) {
      computerSquare[internalRound].style.backgroundColor = 'green'
      userSquare[internalRound].style.backgroundColor = 'red'
      currentRound += 1
      computerScore += 1
      internalRound += 1
      textResultImage.textContent = `ROUND ${currentRound} : COMPUTER WINS`
      compDisplay.textContent = 'Score: ' + computerScore
    } else {
      currentRound += 1
      textResultImage.textContent = `ROUND ${currentRound} : TIED`
    }

    imageResult(currentPlayerHand, computerHand, allHands)
  }

  if (internalRound === computerSquare.length) {
    let normalBtnPlay = document.querySelectorAll('.btn-play')
    let resultBtnPlay = document.querySelector('.btn-play-result')

    normalBtnPlay.forEach((element) => {
      element.style.display = 'none'
    })

    resultBtnPlay.style.display = 'block'

    resultBtnPlay.addEventListener('click', () => {
      if (playerScore > computerScore) {
        alert('PLayer won')
      } else if (playerScore < computerScore) {
        alert('Computer Won')
      } else if (playerScore === computerScore) {
        alert("It's a tie")
      }
    })
  }
}

// PROECESSING WIN IMAGES
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

// audio control
let audioBlock = document.getElementById('audio-block')
let audioSource = document.getElementById('audio-source')

audioBlock.addEventListener('click', () => {
  // audioSource.muted = false by default and if true it MUTES AUDIO
  audioSource.muted = !audioSource.muted
  if (audioSource.muted) {
    audioBlock.style.backgroundImage = 'url("./images/volume-xmark-solid.png")'
  } else {
    audioBlock.style.backgroundImage = 'url("./images/volume-solid.png")'
  }
})
window.addEventListener("click", () => {
  const audio = document.getElementById("audio-source");
  audio.play();
}, { once: true });

