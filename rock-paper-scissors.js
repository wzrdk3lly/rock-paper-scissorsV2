/*
Overview: This js file allows a user to play rock, paper, scissors, against the computer 
*/

const buttons = document.querySelectorAll('button');

//Adds an event listener to each of the buttons to play one round upon button click
buttons.forEach(button => {
    button.addEventListener('click', playRound)
});


// Randomly selects array object for the computer to play 
function computerPlay(){
    let arrayOfChoices = ['rock', 'paper', 'scissors'];
    let randomSelection = (Math.floor(Math.random() * arrayOfChoices.length));
    return arrayOfChoices[randomSelection];
} 

// plays a single round of rock, paper, scissors and returns string message of winner.
// The e is a way to access attributes inside of a function while an event is occurring
function playRound(e){
    let computerSelection = computerPlay();
    // let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    let playerSelection = e.target.className;
   
    switch (true){
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            // return (`You Lose! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
           console.log(`You Lose! You chose: ${playerSelection} and the computer chose: ${computerSelection}`)
            break;
        case (playerSelection === computerSelection):
            console.log(`It's a Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`)
            // return (`It's a Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
        case (playerSelection === "rock" && computerSelection === "scissors"):
            console.log(`You Win! You chose: ${playerSelection} and the computer chose: ${computerSelection}`)
            // return (`You Win! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        default:
            console.log("Something went wrong :(.... Did you enter in a correct guess?")
            // return ("Something went wrong :(.... Did you enter in a correct guess?")
    }
}

// Play 5 rounds and keep track of score
function game(){
let playerScore = 0;
let computerScore = 0;
let roundResult; 

    for(let i = 1; i < 6; i++){
        roundResult = playRound();
        console.log(roundResult);
        switch(true){
            case roundResult.includes("Win"):
                playerScore++;
                break;
            case roundResult.includes("Lose"):
                computerScore++;
                break;
            default:
        }
        console.log(`end of round ${i}: your score is ${playerScore}... The computer's score is ${computerScore}`)
    }
}
