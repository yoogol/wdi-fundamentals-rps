////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
            winner = 'tie';
    } else if (
        ((playerMove === 'rock') && (computerMove === 'scissors')) ||
        ((playerMove === 'scissors') && (computerMove === 'paper')) || 
        ((playerMove == 'paper') && (computerMove === 'rock'))
        ) {
            winner = 'player';
    } else {
            winner = 'computer';
    }
    return winner;
}

// play up to five wins per user
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        // get and print inputs
        var userChoice = getInput();
        var computerChoice = randomPlay();
        console.log("User picked: " + userChoice); // THIS LINE DOES NOT PRINT IN THE FIRST RUN
        console.log("Computer picked: " + computerChoice);
        //determine winner
        var winner = getWinner(userChoice, computerChoice);
        console.log("This time it's " + winner);
        if (winner === "player") {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins += 1;
        } else {
            winner === "tie"}
        console.log("The score is " + playerWins + " : " + computerWins + "\n");
    }
    if (playerWins > computerWins) {
        console.log("Game Over, you win!");    
    } else {
        console.log("Game Over, computer wins!")
    }
    return [playerWins, computerWins];
}

//play up to a X wins per player
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x) {
        // get and print inputs
        var userChoice = getPlayerMove();
        var computerChoice = getComputerMove();
        console.log("User picked: " + userChoice); // THIS LINE DOES NOT PRINT IN THE FIRST RUN
        console.log("Computer picked: " + computerChoice);
        //determine winner
        var winner = getWinner(userChoice, computerChoice);
        console.log("This time it's " + winner);
        if (winner === "player") {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins += 1;
        } else {
            winner === "tie"}
        console.log("The score is " + playerWins + " : " + computerWins + "\n");
    }
    if (playerWins > computerWins) {
        console.log("Game Over, you win!");    
    } else {
        console.log("Game Over, computer wins!")
    }
    return [playerWins, computerWins];
}

