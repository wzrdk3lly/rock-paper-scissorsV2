// create a variable with the type string that represents ComputerSeleciton and UserSelection

// the computer selection will equate to computerPlay 
// the UserSelection will equate to a prompt asking for choice. 
// make userselection case-insensitive by converting to lower case.

// create a function named computer play that randomly returns a string of = 'Rock', 'Paper', or Scissors"
function computerPlay(){
    let arrayOfChoices = ['rock', 'paper', 'scissors'];
    let randomSelection = (Math.floor(Math.random() * arrayOfChoices.length));
    return arrayOfChoices[randomSelection];
} 
// Create a random generator 
        // intializing an array with the 3 options. 
        // pick a random number between 0 & 2 w/ the math.random()*3  OR see if theres a way to return a random number from an array
        // 

// use console.log to check what computerPlay() returns


// create a function to play a single round that takes in parameters of playerSelection and computerSelection and returns the string of if you lose or win.
    // Paper beats Rock 
    // Rock beats Scissors
    // Scissors beat paper

