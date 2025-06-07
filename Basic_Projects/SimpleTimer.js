// Simple Timer
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Countdown timer in seconds.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Seconds to count down: ", input => {
    let sec = parseInt(input);
    if (!sec || sec < 1) {
        console.log("Invalid input.");
        readline.close();
        return;
    }
    const timer = setInterval(() => {
        if (sec === 0) {
            console.log("Time's up!");
            clearInterval(timer);
            readline.close();
        } else {
            console.log(sec--);
        }
    }, 1000);
});
