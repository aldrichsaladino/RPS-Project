// Initialize scores and the round counter
let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;
let gameOver = false;

var emojiMap = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
}
// Function for the computer choice
function getCPUChoice() {
    var Choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * Choices.length);
    return Choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    if (gameOver) {
        return; //stop
    }

    var cpuSelection = getCPUChoice();
    
    document.getElementById('player-choice').textContent = emojiMap[playerSelection];
    document.getElementById('cpu-choice').textContent = emojiMap[cpuSelection];
    // Get the vs-text element
    var vsText = document.getElementById('vs-text');

    if (playerSelection === cpuSelection) {
        updateRoundResult(`It's a tie! Both players chose ${playerSelection}`);
        vsText.style.color = "orange"; // Neutral color for a tie
    } else if (
        (playerSelection === "rock" && cpuSelection === "scissors") ||
        (playerSelection === "paper" && cpuSelection === "rock") ||
        (playerSelection === "scissors" && cpuSelection === "paper")
    ) {
        playerScore++;
        updateRoundResult(`You win! ${playerSelection} beats ${cpuSelection}`);
        vsText.style.color = "green"; // Green for a win
    } else {
        cpuScore++;
        updateRoundResult(`You lost! ${cpuSelection} beats ${playerSelection}`);
        vsText.style.color = "red"; // Red for a loss
    }

    // Add the shake animation class
    vsText.classList.add("shake");

    // Remove the shake class after the animation ends
    setTimeout(() => vsText.classList.remove("shake"), 500);

    updateScoreboard();

    if (playerScore >= 3 || cpuScore >= 3) {
        displayFinalScore();
        gameOver = true;
    }
}

// Function to update the round result in HTML
function updateRoundResult(message) {
    var roundResultDiv = document.getElementById("roundResult");
    roundResultDiv.textContent = message;
}

// Function to update the scoreboard in HTML
function updateScoreboard() {
    var scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${cpuScore}`;
}

// Function to display the final score after the game ends
function displayFinalScore() {
    var endMessage = document.getElementById("end-message");

    if (playerScore === 3 ) {
        endMessage.textContent = `Congratulations! You win ${playerScore} to ${cpuScore}! 🎉`;
        //Add confetti Java
        triggerConfetti(); //this would be from a function
    } else if (cpuScore === 3) {
        endMessage.textContent = `Game over! You lost ${playerScore} to ${cpuScore} 😢`;
    }
    
    // Show the modal
    var modal = document.getElementById("endgame-modal");
    document.getElementById("endgame-modal").classList.add("show");
    document.getElementById("modal-overlay").classList.add("show");
}

// Function to restart the game
function restartGame() {
    playerScore = 0;
    cpuScore = 0;
    roundsPlayed = 0;
    gameOver = false;

    // Reset scoreboard and round result
    updateScoreboard();
    updateRoundResult("Make your choice to start the game!");

    // Reset the modal 
    var modal = document.getElementById("endgame-modal");
    modal.classList.remove("show");
    modal.style.display ="none"
}

function triggerConfetti() {
    var confettiTime = 3000; 
    var interval = setInterval(() =>{
        confetti({
        particleCount: 100, // Number of particles
        spread: 70,        // Spread of the particles
        origin: { y: 0.6 }, // Origin position (lower = higher confetti start)
    }); 
        var canvas = document.querySelector("canvas") //finds canvas based on the script for the confetti
        if(canvas) canvas.style.pointerEvents = "none";
    },250); //Timer set to 250ms
    
    setTimeout(() => {
        clearInterval(interval);
        var canvas = document.querySelector("canvas");
        if(canvas) canvas.remove();
    },confettiTime);


}
