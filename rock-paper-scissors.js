// initializes variables that takes in both the computer and user selections
let randomComputerSelection = computerPlay();
let userSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

playRound(userSelection, randomComputerSelection);
// Randomly selects object to play 
function computerPlay(){
    let arrayOfChoices = ['rock', 'paper', 'scissors'];
    let randomSelection = (Math.floor(Math.random() * arrayOfChoices.length));
    return arrayOfChoices[randomSelection];
} 

// create a function to play a single round that takes in parameters of playerSelection and computerSelection and returns the string of if you lose or win.
// Would prefer to use switch statements since it has the potential to contain alot of if and else statements. 
function playRound(playerSelection, computerSelection){
    switch (true){
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            console.log(`You lose! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        case (playerSelection === computerSelection):
            console.log(`It's a Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
        case (playerSelection === "rock" && computerSelection === "scissors"):
            console.log(`You Win! You chose: ${playerSelection} and the computer chose: ${computerSelection}`);
            break;
        default:
            console.log("Something went wrong :(.... Did you enter in a correct guess?")
    }
}


