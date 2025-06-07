// Calculator
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// A basic calculator for +, -, *, / operations using user input.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("First number: ", n1 => {
    readline.question("Operator (+, -, *, /): ", op => {
        readline.question("Second number: ", n2 => {
            const a = parseFloat(n1), b = parseFloat(n2);
            let res;
            switch (op) {
                case '+': res = a + b; break;
                case '-': res = a - b; break;
                case '*': res = a * b; break;
                case '/': res = b !== 0 ? a / b : "Error: Division by zero"; break;
                default: res = "Invalid operator";
            }
            console.log("Result:", res);
            readline.close();
        });
    });
});
