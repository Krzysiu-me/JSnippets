// Number Guessing Game
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Guess a randomly generated number between 1 and 100.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const answer = Math.floor(Math.random() * 100) + 1;
let tries = 0;
function ask() {
    readline.question("Guess a number (1-100): ", input => {
        const guess = parseInt(input);
        tries++;
        if (guess < answer) {
            console.log("Too low!");
            ask();
        } else if (guess > answer) {
            console.log("Too high!");
            ask();
        } else {
            console.log(`Correct! You got it in ${tries} tries.`);
            readline.close();
        }
    });
}
ask();
