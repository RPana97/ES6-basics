// Creating two arrays of numbers
let numbers1 = [1, 2, 3, 4, 5, 6];
let numbers2 = [7, 8, 9, 10, 11];

// Using the spread operator to create an array called numbers that combines elements of numbers1 and numbers2
let numbers = [...numbers1, ...numbers2];

// Defining an arrow function called square that accepts a number as an argument and returns the square of the number
const square = (x) => x * x;

// Using the map method to create a new array called squares that contains the squares of the numbers in the numbers array
const squares = numbers.map(square);

// Defining an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false
const isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}

// Using the filter method to create a new array called evenSquares that contains only the even squares from the squares array
const evenSquares = squares.filter(isEven);

// Using destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Using a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares
console.log(`Original numbers array: ${numbers}
Squares array: ${squares}
Even squares array: ${evenSquares}
First even square: ${firstEvenSquare}
Second even square: ${secondEvenSquare}`);