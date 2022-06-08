let a = 'rock';
let b = 'paper';
let c = 'scissors';

function computerPlay (){
let randomNumber = Math.floor(Math.random() * 7);
    if (randomNumber <= 2){
    return a; } else if (randomNumber <= 4) {
    return b;
   } else { 
        return c;
    }
} 


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === c){
        userScore++;
      return 'You WIN! ' + 'Rock beats Scissors';
} else if (playerSelection === 'paper' && computerSelection === c){ 
        computerScore++;
     return 'You LOSE! ' + 'Scissors beats Paper';
} else if (playerSelection === 'scissors' && computerSelection === b){
        userScore++;
     return 'You WIN! ' + 'Scissors beats Paper' ;
}  else if (playerSelection === 'paper' && computerSelection === a){
        userScore++;
     return "You WIN! ' + 'Paper beats Rock" ;
}  else if (playerSelection === 'rock' && computerSelection === b){
        computerScore++;    
   return 'You LOSE! ' + 'Paper beats Rock' ;
}  else if (playerSelection === 'scissors' && computerSelection === a){
        computerScore++;
   return 'You LOSE! ' +'Rock beats Scissors' ; }
  else if (playerSelection === computerSelection){
    return 'DRAWW!!!';
} else {
    return "Wrong Input"
}
}

let userScore = 0;
let computerScore = 0;

function game(){
for (let i = 1; i <= 5; i++){
const computerSelection = computerPlay();
const playerSelection = prompt('Rock Paper Scissors','ROCK').toLowerCase();
console.log (playRound(playerSelection, computerSelection));
console.log('Your Score ' + userScore)
console.log('Computer Score ' + computerScore)
}}

