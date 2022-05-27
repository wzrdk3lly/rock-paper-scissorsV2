/*
Overview: This js file allows a user to play rock, paper, scissors, against the computer 
*/ 

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    const buttons = document.querySelectorAll('button');

    //TODO: Create a while loop that allows someone to play a game for 5 rounds only

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
    
    
    const result = document.querySelector('.result')
    // TODO: Add feature that styles the text in css or in the javascript.
    //         - Find which strat applies to best practices? In css or Javascript
   
    switch (true){
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            // return (`You Lose! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
           result.textContent = (`You Lose! You chose: ${playerSelection} and the computer chose: ${computerSelection}`)
           computerScore++
            break;
        case (playerSelection === computerSelection):
            result.textContent = (`It's a Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`)
            // return (`It's a Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
        case (playerSelection === "rock" && computerSelection === "scissors"):
            result.textContent = (`You Win! You chose: ${playerSelection} and the computer chose: ${computerSelection}`)
            playerScore++
            // return (`You Win! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        default:
            result.textContent = ("Something went wrong :(.... Did you enter in a correct guess?")
            // return ("Something went wrong :(.... Did you enter in a correct guess?")
    }
    round++;

    if (round >=5) {
        if (playerScore > computerScore){
            console.log(`You won: Home - ${playerScore} || Away - ${computerScore} `)
        }
        else{
            buttonContainer[0].remove()
            console.log(`You lost: Home - ${playerScore} || Away - ${computerScore} `)
        }
        buttons.forEach(button => {
            button.removeEventListener('click', playRound)
        });
    }
}


// Play 5 rounds and keep track of score
function fiveRoundGame(){
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
