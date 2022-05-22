// initializes variables that takes in both the computer and user selections
let computerSelection = computerPlay();
let userSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

// Randomly selects object to play 
function computerPlay(){
    let arrayOfChoices = ['rock', 'paper', 'scissors'];
    let randomSelection = (Math.floor(Math.random() * arrayOfChoices.length));
    return arrayOfChoices[randomSelection];
} 

// create a function to play a single round that takes in parameters of playerSelection and computerSelection and returns the string of if you lose or win.
// Would prefer to use switch statements since it has the potential to contain alot of if and else statements. 
// switch (true)
    //     case (playerselection === rock && computer === paper):
    //     case (plaerselection === paper && computer === scissors):
    //     case (playerselection === scissors && computer === rock):
    //         console.log("You lose");
    //         break;
    //     case ...
    //         console.log("tie");
    //         break;
    //     case default
    //         console.log(you win);
    //         break;


