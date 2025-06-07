// Even Odd Checker
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Checks if a number is even or odd using user input.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter a number: ", input => {
    const num = parseInt(input);
    if (isNaN(num)) console.log("Not a number.");
    else console.log(num % 2 === 0 ? "Even" : "Odd");
    readline.close();
});
