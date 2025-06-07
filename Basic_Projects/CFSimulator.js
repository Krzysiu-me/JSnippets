// Coin Flip Simulator
// Copyright (c) 2025 Krzysiu
// Licensed under the MIT License. See LICENSE file for details.

// Simulates flipping a coin.
const flip = () => (Math.random() < 0.5 ? "Heads" : "Tails");
console.log("Coin flip result:", flip());
