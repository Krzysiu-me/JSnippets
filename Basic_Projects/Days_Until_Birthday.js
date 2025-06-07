// Days Until Birthday
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Calculates days until the user's next birthday.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter your birthday (MM-DD): ", input => {
    const now = new Date();
    const [month, day] = input.split('-').map(Number);
    let next = new Date(now.getFullYear(), month - 1, day);
    if (next < now) next.setFullYear(now.getFullYear() + 1);
    const diff = Math.ceil((next - now) / (1000 * 60 * 60 * 24));
    console.log(`Days until your next birthday: ${diff}`);
    readline.close();
});
