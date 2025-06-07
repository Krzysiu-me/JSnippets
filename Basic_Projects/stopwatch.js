// Stopwatch
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Simple stopwatch for timing tasks.
console.log("Press Enter to start the stopwatch.");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("", () => {
    const start = Date.now();
    console.log("Stopwatch started. Press Enter to stop.");
    readline.question("", () => {
        const end = Date.now();
        const seconds = ((end - start) / 1000).toFixed(2);
        console.log(`Elapsed time: ${seconds} seconds`);
        readline.close();
    });
});
