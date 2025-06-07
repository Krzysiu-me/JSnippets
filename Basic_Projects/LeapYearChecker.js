// Leap Year Checker
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Checks if a year is a leap year using user input.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter a year: ", input => {
    const year = parseInt(input);
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(isLeap ? "Leap year" : "Not a leap year");
    readline.close();
});
