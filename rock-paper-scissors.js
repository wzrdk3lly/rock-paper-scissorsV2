/*
Overview: This js file allows a user to play rock, paper, scissors, against the computer 
*/ 

let playerScore = 0;
let computerScore = 0;
let round = 0;

const buttons = document.querySelectorAll('button');

//Adds an event listener to each of the buttons to play one round upon button click
buttons.forEach(button => {
    button.addEventListener('click', playFiveRounds)
});


// Randomly selects array object for the computer to play 
function computerPlay(){
    let arrayOfChoices = ['rock', 'paper', 'scissors'];
    let randomSelection = (Math.floor(Math.random() * arrayOfChoices.length));
    return arrayOfChoices[randomSelection];
} 

// plays a single round of rock, paper, scissors and returns string message of winner.
// The e is a way to access attributes inside of a function while an event is occurring
function playFiveRounds(e){

    let computerSelection = computerPlay();

    // let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    let playerSelection = e.target.className;
    
    
    let result = document.querySelector('.result');
    let roundDisplay = document.querySelector('.round');
    let playerScoreDisplay = document.querySelector('.player-score');
    let computerScoreDisplay = document.querySelector('.computer-score');

   
    // determines winner of one round - TODO: convert to function later 
    switch (true){
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):

           result.textContent = (`You Lose! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);

           computerScore++;
           computerScoreDisplay.textContent = computerScore;

            break;
        case (playerSelection === computerSelection):

            result.textContent = (`It's a Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
        case (playerSelection === "rock" && computerSelection === "scissors"):

            result.textContent = (`You Win! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        default:
            result.textContent = ("Something went wrong :(.... Did you enter in a correct guess?");
    }
    round++;
    roundDisplay.textContent = round;

    if (round >=5) {
        if (playerScore > computerScore){
            result.textContent = "Congratulations you Won!!! Woohooo!"
        }
        else{
            result.textContent = "Sorry chap, you lost. Maybe next time?"
        }
        buttons.forEach(button => {
            button.removeEventListener('click', playFiveRounds)
        });
    }
}
