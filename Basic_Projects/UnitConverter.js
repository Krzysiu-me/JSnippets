// Unit Converter
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Simple unit converter: cm/inch, kg/lb, km/mile.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Options: 1) cm to inch 2) inch to cm 3) kg to lb 4) lb to kg 5) km to mile 6) mile to km");
readline.question("Choose conversion (1-6): ", opt => {
    readline.question("Value to convert: ", val => {
        const value = parseFloat(val);
        let result;
        switch (opt) {
            case "1": result = value / 2.54 + " in"; break;
            case "2": result = value * 2.54 + " cm"; break;
            case "3": result = value * 2.20462 + " lb"; break;
            case "4": result = value / 2.20462 + " kg"; break;
            case "5": result = value / 1.60934 + " miles"; break;
            case "6": result = value * 1.60934 + " km"; break;
            default: result = "Invalid option";
        }
        console.log("Result:", result);
        readline.close();
    });
});
