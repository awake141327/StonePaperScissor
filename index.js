const player1Text = document.getElementById('player1')
const player2Text = document.getElementById('player2')
const player1Section = document.getElementById('player-1')
const player2Section = document.getElementById('player-2')
const container = document.getElementById('container')
const startBtn = document.getElementById('startBtn')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const playerPick = document.getElementById('playerPick')
const lockPick = document.getElementById('lockPick')
const youChose = document.getElementById('youChose')
const cpuChose = document.getElementById('cpu-choice')
const winner = document.getElementById('winner')
const warning = document.getElementById('warning')

let playerChoice = ''
let cpuChoice = ''
let number = 0


function startGame(){
  container.style.display = 'block'
  startBtn.style.display = 'none'
}

function playerChoseRock() {
  playerChoice = 'rock'
  youChose.textContent = "YOUR CHOICE"
  playerPick.innerHTML = `<img src="rock.png">`
  youChose.style.visibility = 'visible'
  lockPick.style.visibility = 'visible'
  lockPick.style.display = "inline"
  winner.innerHTML = ''
  cpuChose.innerHTML = ''
}

function playerChosePaper() {
  playerChoice = 'paper'
  playerPick.innerHTML = `<img src="paper.png">`
  youChose.textContent = "YOUR CHOICE"
  youChose.style.visibility = 'visible'
  lockPick.style.visibility = 'visible'
  lockPick.style.display = "inline"
  winner.innerHTML = ''
  cpuChose.innerHTML = ''
}

function playerChoseScissor() {
  playerChoice = 'scissor'
  youChose.textContent = "YOUR CHOICE"
  playerPick.innerHTML = `<img src="scissor.png">`
  youChose.style.visibility = 'visible'
  lockPick.style.visibility = 'visible'
  lockPick.style.display = "inline"
  winner.innerHTML = ''
  cpuChose.innerHTML = ''
}

function randomCpuChoice() {
  warning.style.display = 'block'
  lockPick.style.display = 'none'
  number = Math.floor(Math.random()*3)+1
  if(number === 1) {
    cpuChose.innerHTML = `<img src="scissor-flip.png">`
    cpuChoice = 'scissor'
  } else if (number === 2) {
    cpuChose.innerHTML = `<img src="paper-flip.png">`
    cpuChoice = 'paper'
  } else if (number === 3) {
    cpuChose.innerHTML = `<img src="rock-flip.png">`
    cpuChoice = 'rock'
  }
  if(
    (playerChoice === 'rock' && cpuChoice === 'rock') ||
    (playerChoice === 'scissor' && cpuChoice === 'scissor') ||
    (playerChoice === 'paper' && cpuChoice === 'paper')
  ) {
      winner.innerHTML = `'IT WAS A TIE'`
  } else if(
    (playerChoice === 'rock' && cpuChoice === 'scissor') ||
    (playerChoice === 'paper' && cpuChoice === 'rock') ||
    (playerChoice === 'scissor' && cpuChoice === 'paper')
  ) {
    winner.innerHTML = `'PLAYER WINS'`
  } else if(
    (playerChoice === 'rock' && cpuChoice === 'paper') ||
    (playerChoice === 'paper' && cpuChoice === 'scissor') ||
    (playerChoice === 'scissor' && cpuChoice === 'rock')
  ) {
    winner.innerHTML = `'CPU WINS'`
    }

}


startBtn.addEventListener('click', startGame)
rock.addEventListener('click', playerChoseRock)
paper.addEventListener('click', playerChosePaper)
scissor.addEventListener('click', playerChoseScissor)
lockPick.addEventListener('click', randomCpuChoice)
