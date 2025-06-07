// Rock Paper Scissors Game
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Plays rock, paper, scissors against the computer.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const choices = ["rock", "paper", "scissors"];
function play() {
    readline.question("Choose (rock/paper/scissors): ", input => {
        const user = input.toLowerCase();
        const computer = choices[Math.floor(Math.random() * 3)];
        if (!choices.includes(user)) {
            console.log("Invalid choice.");
            play();
        } else {
            console.log("Computer chose:", computer);
            if (user === computer) console.log("It's a tie!");
            else if (
                (user === "rock" && computer === "scissors") ||
                (user === "paper" && computer === "rock") ||
                (user === "scissors" && computer === "paper")
            ) console.log("You win!");
            else console.log("You lose!");
            readline.close();
        }
    });
}
play();
