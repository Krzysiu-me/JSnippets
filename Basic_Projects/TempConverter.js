// Temperature Converter
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Converts Celsius to Fahrenheit and vice versa.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter value and unit (e.g. 20C or 68F): ", input => {
    const match = input.match(/^([-+]?\d+(\.\d+)?)([cCfF])$/);
    if (!match) {
        console.log("Invalid input.");
    } else {
        let [ , value, , unit ] = match;
        value = parseFloat(value);
        if (unit.toUpperCase() === "C")
            console.log(`${value}°C = ${value * 9 / 5 + 32}°F`);
        else
            console.log(`${value}°F = ${(value - 32) * 5 / 9}°C`);
    }
    readline.close();
});
