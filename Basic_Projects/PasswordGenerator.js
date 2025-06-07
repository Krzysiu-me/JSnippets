// Password Generator
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Generates a random password of a given length.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function generate(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let out = "";
    for (let i = 0; i < length; i++)
        out += chars[Math.floor(Math.random() * chars.length)];
    return out;
}
readline.question("Password length? ", input => {
    const len = parseInt(input);
    if (!len || len < 1) console.log("Invalid length.");
    else console.log("Generated password:", generate(len));
    readline.close();
});
