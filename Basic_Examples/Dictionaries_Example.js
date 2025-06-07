// Dictionaries Example
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Demonstrates how to use objects (dictionaries) in JavaScript.
const person = { name: "John", age: 30, city: "New York" };
console.log(person.name);  // John
person.job = "Developer";
console.log(person);
delete person.age;
console.log(person);
