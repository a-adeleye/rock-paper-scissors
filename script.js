function computerPlay(){
    let guesses = ['rock', 'paper', 'scissors'];
    let guessIndex = Math.floor(Math.random() * guesses.length);
    let guess = guesses[guessIndex];
    return guess;
}

let humanPlay;
let computerSelection;
let computerScore = 0;
let humanScore = 0;
let tie = 0;
let round = 0;
document.querySelector('.range').value = '10';
document.querySelector('.roundSpan').textContent = '10';

function rockBtnClick () {
    humanPlay = 'rock';
    play();
}

function paperBtnClick () {
    humanPlay = 'paper';
    play();
}

function scissorsBtnClick () {
    humanPlay = 'scissors';
    play();
}

function playRound() {
    computerSelection = computerPlay();
    if(humanPlay === computerSelection){
        tie++
    } else if (humanPlay === 'rock' && computerSelection === 'scissors') {
        humanScore++;
    }
    else if (humanPlay === 'paper' && computerSelection === 'rock') {
        humanScore++;
    } else if (humanPlay === 'scissors' && computerSelection === 'paper') {
        humanScore++;
    } else {
        computerScore++;
    }    
}

function play(){
    let chosenRound = setRound();
    if(round < chosenRound){
    playRound();
    updatePoints();
    updateRound();
    updateHumanImage ();
    updateComputerImage();
    updateRoundBoard();
    roundChecker();    
    }  
}

const tiePoints = document.getElementById('tie');
const playerPoints = document.getElementById('humanScore');
const computerPoints = document.getElementById('computerScore');
const roundNumber = document.querySelector('.roundNumber');
const scoreboard = document.querySelector('.roundBoard');


function updatePoints(){
    tiePoints.textContent = tie;
    computerPoints.textContent = computerScore;
    playerPoints.textContent = humanScore;
}

function updateRound () {
    round++;
    roundNumber.textContent = round;
}

function roundChecker () {
    let chosenRound = Number(setRound());
    if(round === chosenRound){
        displayModal()
    }
}

function reset () {
    round = '';
    tie = '';
    computerScore = '';
    humanScore = '';
    roundNumber.textContent = round;
    scoreboard.textContent = '';
    document.getElementById('humanImg').src = 'dice.png';
    document.getElementById('compImg').src = 'dice.png';
    updatePoints();
    document.querySelector('.range').value = '10';
    document.querySelector('.roundSpan').textContent = '10';
}

function updateRoundBoard () {
    let p = document.createElement('p');
    p.textContent = humanPlay + ' ' + round + ' ' + computerSelection;
    scoreboard.appendChild(p);
}

function updateHumanImage () {
    let humanSelectionImage = document.getElementById('humanImg');
    if (humanPlay === 'rock'){
        humanSelectionImage.src = 'rock.png'
    } else if (humanPlay === 'scissors'){
        humanSelectionImage.src = 'scissors.png';
    } else {
        humanSelectionImage.src = 'paper.png';
    };
}

function updateComputerImage () {
    let compSelectionImage = document.getElementById('compImg');
    if (computerSelection === 'rock'){
        compSelectionImage.src = 'rock.png'
    } else if (computerSelection === 'scissors'){
        compSelectionImage.src = 'scissors.png';
    } else {
        compSelectionImage.src = 'paper.png';
    }
}

function displayModal(){
    const modal = document.querySelector('.modal-container');
    const close = document.querySelector('.close');
    displayWinner();
    modal.style.display = 'flex';
    close.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
}

function restartGame () {
    const modal = document.querySelector('.modal-container');
    modal.style.display = 'none';
    reset();
}

function determineWinner(){
    let result;
    if(computerScore === humanScore){
        result = 'It\s a tie!';
    } else  if(computerScore > humanScore){
        result = 'Computer Wins!';
    } else {
        result = 'You Win!';
    }
    return result;
}

function displayWinner () {
    document.querySelector('.winner').textContent = determineWinner();
}

function setRound(){
    let roundNumber = document.querySelector('.range').value;
    document.querySelector('.roundSpan').textContent = roundNumber;
    return roundNumber;
    
}


