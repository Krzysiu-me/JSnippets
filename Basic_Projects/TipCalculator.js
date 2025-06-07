// Tip Calculator
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Calculates tip based on bill and percent.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Bill amount: ", amt => {
    readline.question("Tip percent: ", pct => {
        const bill = parseFloat(amt), percent = parseFloat(pct);
        if (isNaN(bill) || isNaN(percent)) {
            console.log("Invalid input.");
        } else {
            const tip = bill * (percent / 100);
            console.log(`Tip: £${tip.toFixed(2)} | Total: £${(bill + tip).toFixed(2)}`);
        }
        readline.close();
    });
});
