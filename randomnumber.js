function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = 1; // Change this to set the minimum range
let max = 10; // Change this to set the maximum range
let randomNum = generateRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNum}`);
