// Error Handling Example
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Demonstrates basic error handling in JavaScript.
try {
    let result = 10 / 0;
    if (!isFinite(result)) throw new Error("Division by zero!");
    console.log(result);
} catch (error) {
    console.log("Caught error:", error.message);
}
