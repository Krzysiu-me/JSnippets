// To-Do List
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Simple CLI to-do list.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let todos = [];
function menu() {
    console.log("\nTo-Do List");
    console.log("1. Add");
    console.log("2. View");
    console.log("3. Remove");
    console.log("4. Exit");
    readline.question("Choose: ", choice => {
        if (choice === "1") {
            readline.question("Add: ", item => {
                todos.push(item);
                menu();
            });
        } else if (choice === "2") {
            if (todos.length === 0) console.log("No items.");
            else todos.forEach((item, idx) => console.log(`${idx + 1}. ${item}`));
            menu();
        } else if (choice === "3") {
            readline.question("Remove number: ", idx => {
                const n = parseInt(idx) - 1;
                if (!isNaN(n) && n >= 0 && n < todos.length) {
                    todos.splice(n, 1);
                    console.log("Removed.");
                } else {
                    console.log("Invalid number.");
                }
                menu();
            });
        } else if (choice === "4") {
            readline.close();
        } else {
            menu();
        }
    });
}
menu();
