# Rock-Paper-Scissors Game 🎮

This is a modern web-based implementation of the classic *Rock-Paper-Scissors* game. The game is written in **HTML**, **CSS**, and **JavaScript** and features an interactive user interface where players can compete against a computer opponent. The first player to reach 3 wins emerges victorious!

## Features ✨
- **Interactive UI**: Play the game in a visually appealing interface with buttons for each choice and real-time feedback on results.
- **Dynamic Gameplay**: Displays both the player's and computer's choices with emojis and keeps a running score.
- **Victory Celebration**: Includes confetti animations when the player wins the game.
- **Game Reset**: Easily restart the game with a "Play Again" button after the final result.
- **Responsive Design**: Works on various screen sizes for a seamless gaming experience.

## How It Works 🛠️
1. **Player vs Computer**:  
   - The player selects one of three options: *Rock*, *Paper*, or *Scissors*.
   - The computer generates its choice randomly.
   
2. **Game Rules**:  
   - Rock beats Scissors 🪨✂️
   - Scissors beat Paper ✂️📄
   - Paper beats Rock 📄🪨
   - If both the player and computer select the same option, the round ends in a tie.

3. **Winning Condition**:  
   - The game ends when either the player or the computer reaches **3 points**.
   - A modal displays the final score with a message congratulating the winner or notifying the player of a loss.

4. **Confetti Animation**:  
   - If the player wins, confetti bursts on the screen to celebrate their victory.

5. **Play Again**:  
   - Players can reset the game by clicking the "Play Again" button.

## How to Run 🚀
1. Clone this repository to your local machine:
   ```bash
   git clone <https://github.com/aldrichsaladino/RPS-Project>
2. Open the index.html file in a modern browser (e.g., Chrome, Firefox, Edge).
3. Start playing by selecting Rock, Paper, or Scissors! 🎉

The other option you may do is run it directly through Github Pages: https://aldrichsaladino.github.io/RPS-Project/
## Example Output 🖥️
```
Game Start:

Player: 0 - Computer: 0
Make your choice to start the game!
Mid-Game:

Player: 2 - Computer: 1
You win! Scissors beats Paper ✂️📄
Endgame:

Player: 3 - Computer: 2
Congratulations! You win 3 to 2! 🎉
Modal Display:

Victory: "Congratulations! You win 3 to 2! 🎉"
Defeat: "Game Over! You lost 3 to 1. 😢"
```

## Code Structure 📂
- **`computerChoice()`**: Generates the computer's choice randomly.
- **`gethumanChoice()`**: Prompts the user for a valid input and handles invalid entries.
- **`playRound()`**: Determines the winner of a single round and handles invalid inputs.
- **`playGame()`**: Manages the overall game flow, scorekeeping, and final results.

## HTML:
- Includes the game structure, player/computer choice display, score, and modal for the final result.

## CSS:
- Styles the game interface with animations for victory celebration and button hover effects.

## JavaScript:
- **`playRound(playerSelection)`**: Handles a single round of the game, comparing player and computer choices.
- **`getCPUChoice()`**: Randomly generates the computer's choice.
- **`updateScoreboard()`**: Updates the player and computer scores in real-time.
- **`1triggerConfetti()`**: Creates a confetti animation to celebrate a victory.
- **`restartGame()`**: Resets scores and UI elements to allow a new game.

## Contributions 🤝
Contributions, suggestions, and improvements are welcome! Feel free to fork the repository and submit a pull request.
