let a = 'rock';
let b = 'paper';
let c = 'scissors';

const playerScore = document.getElementById('playerScore');
const cpuScore = document.getElementById('cpuScore')
playerScore.style.border = '5px solid yellow';
playerScore.style.backgroundColor = 'grey';
cpuScore.style.border = '5px solid yellow';
cpuScore.style.backgroundColor = 'grey';
const para2 = document.getElementById('20');
para2.style.border = '5px solid purple';
para2.style.backgroundColor = 'grey';
para2.style.padding= '20px'
const score = document.getElementById('Score')
score.style.backgroundColor = 'purple';

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
button.addEventListener('click', ()=> {
playerSelection = button.id;
let computerSelection = computerPlay(); 
para2.textContent = playRound(playerSelection, computerSelection);
game();
score.textContent = win();
})
})
 
function computerPlay (){
let randomNumber = Math.floor(Math.random() * 7);
    if (randomNumber <= 2){
    return a; } else if (randomNumber <= 4) {
    return b;
   } else { 
        return c;
    }
} 
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === c){
      userScore++;
    return 'You WIN! Rock beats Scissors';
} else if (playerSelection === 'paper' && computerSelection === c){ 
      computerScore++;
   return 'You LOSE! Scissors beats Paper';
} else if (playerSelection === 'scissors' && computerSelection === b){
      userScore++;
   return 'You WIN! Scissors beats Paper' ;
}  else if (playerSelection === 'paper' && computerSelection === a){
      userScore++;
   return "You WIN! Paper beats Rock" ;
}  else if (playerSelection === 'rock' && computerSelection === b){
      computerScore++;    
 return 'You LOSE! Paper beats Rock' ;
}  else if (playerSelection === 'scissors' && computerSelection === a){
      computerScore++;
 return 'You LOSE! Rock beats Scissors' ; }
else if (playerSelection === computerSelection){
  return 'DRAWW!';
} else {
  return "Wrong Input"
}
}

function win() {
  if (userScore >= 5){
  return  "Winner Player!"
} else if (computerScore >= 5){
  return  "Winner CPU!"
} 
}

function game(){
for (let i = 1; i <= 5; i++){
  playerScore.textContent = 'Your Score ' + userScore;
  cpuScore.textContent = 'Computer Score ' + computerScore;
}
}


    