// From Eloquent JS Chapter 2 - Loops

// Looping a triangle
// Write a loop that makes seven calls to console.log to output a hash mark triangle
for (let line = '#'; line.length < 8; line += '#' ) {
    console.log(line);
}

// Write a program to write all numbers form 1 to 100
// For numbers divisible by 3, print "Fizz" instead of the number
// For number divisible by 5, print "Buzz" instead of the number
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += 'Fizz';
    if (n % 5 == 0) output += 'Buzz';
    console.log(output || n);
}

// Print "FizzBuzz" for numbers divisible by both 3 and 5


// Write a program that creates a string that represents an 8x8 grid using newline characters to separate lines.
// At each position in the grid, there is either a space or a # character. The characters should form a chess board.
