// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )

function powersOfTwo(n) {
    const powers = [];
    for (let i = 0; i <= n; i++) {
        powers.push(Math.pow(2, i));
    }
    return powers;
}

// Example usage:
const result = powersOfTwo(5);
console.log(result); // Output: [1, 2, 4, 8, 16, 32]
