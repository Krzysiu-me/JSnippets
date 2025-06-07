// List Comprehension Example
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Mimics Python list comprehensions using map and filter in JavaScript.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x * x); // Square every number
console.log(squares);
const even = numbers.filter(x => x % 2 === 0); // Keep only even numbers
console.log(even);
