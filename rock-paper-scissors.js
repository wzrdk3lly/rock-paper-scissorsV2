/*
Overview: This js file allows a user to play rock, paper, scissors, against the computer 
*/ 

let playerScore = 0;
let computerScore = 0;
let round = 0;

const buttons = document.querySelectorAll('.rps');
let result = document.querySelector('.result');
let roundDisplay = document.querySelector('.round');
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');

// Show the player score as 0 when starting 
roundDisplay.textContent = round
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;



activateButtons();


//Adds an event listener to each of the buttons to play one round upon button click
function activateButtons(){
    buttons.forEach(button => {
        button.addEventListener('click', playFiveRounds)
    });
}


// Randomly selects array item for the computer's move
function computerPlay(){
    let arrayOfChoices = ['rock', 'paper', 'scissors'];
    let randomSelection = (Math.floor(Math.random() * arrayOfChoices.length));
    return arrayOfChoices[randomSelection];
} 

function playRound(playerSelection,computerSelection){
    

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
}

function determineWinner (){
    if (round >=5) {
        if (playerScore > computerScore){
            result.textContent = "Congratulations you won!!! Woohooo!"
        }
        else if (playerScore < computerScore){
            result.textContent = "Sorry chap, you lost. Maybe next time?"
        }
        else{
            result.textContent = "Looks like it's a tie. I think you can beat it in your next try"
        }
        buttons.forEach(button => {
            button.removeEventListener('click', playFiveRounds)
        });
    }
}

// Plays five rounds 
function playFiveRounds(e){

    let computerSelection = computerPlay();

    // The e is a way to access attributes inside of a function while an event is occurring
    let playerSelection = e.target.innerText;
    
    // Determines the winner of one round 
    playRound(playerSelection,computerSelection);

    determineWinner();

    resetGame();
}

function resetGame(){
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () =>{
        playerScore = 0;
        computerScore = 0;
        round = 0;

        roundDisplay.textContent = round
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore
        result.textContent = "Begin now by picking your first move";
        activateButtons();
    });
    
}

