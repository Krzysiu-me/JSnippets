// UserInput Example
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Reads user input from the command line.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("What's your name? ", name => {
    console.log(`Hello, ${name}!`);
    readline.close();
});
