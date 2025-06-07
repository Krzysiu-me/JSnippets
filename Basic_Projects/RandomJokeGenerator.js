// Random Joke Generator
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Prints a random joke from a list.
const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm on a seafood diet. I see food and I eat it.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta."
];
const joke = jokes[Math.floor(Math.random() * jokes.length)];
console.log(joke);
