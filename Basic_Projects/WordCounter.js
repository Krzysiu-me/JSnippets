// Word Counter
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Counts words in a string entered by the user.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter text: ", txt => {
    const words = txt.trim().split(/\s+/).filter(Boolean);
    console.log(`Word count: ${words.length}`);
    readline.close();
});
