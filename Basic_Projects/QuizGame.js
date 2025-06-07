// Quiz Game
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Simple CLI quiz with a few questions.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const quiz = [
    { q: "Capital of France?", a: "Paris" },
    { q: "2 + 2?", a: "4" },
    { q: "Colour of the sky?", a: "Blue" }
];
let i = 0, score = 0;
function ask() {
    if (i < quiz.length) {
        readline.question(quiz[i].q + " ", ans => {
            if (ans.trim().toLowerCase() === quiz[i].a.toLowerCase()) {
                console.log("Correct!");
                score++;
            } else {
                console.log("Wrong! The answer was:", quiz[i].a);
            }
            i++; ask();
        });
    } else {
        console.log(`Quiz finished! You got ${score}/${quiz.length} correct.`);
        readline.close();
    }
}
ask();
