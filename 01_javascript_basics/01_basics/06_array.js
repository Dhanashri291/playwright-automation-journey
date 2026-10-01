// ==========================================
// JavaScript Arrays Practice
// ==========================================

// 1. Array Initialization
const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(10, 20, 30);

console.log("Initial Array:", myArr);

// 2. Common Array Methods
myArr.push(6);      // Adds element to the end
myArr.push(7);
myArr.pop();        // Removes last element

myArr.unshift(9);   // Adds element to the start
myArr.shift();      // Removes first element

console.log("Includes 3?", myArr.includes(3));
console.log("Index of 3:", myArr.indexOf(3));

// 3. Slice vs Splice
console.log("\n--- Slice vs Splice ---");
console.log("Original before slice:", myArr);

// slice returns a section of an array (non-mutating)
const myn1 = myArr.slice(1, 3);
console.log("Slice (1, 3):", myn1);
console.log("Original after slice:", myArr);

// splice modifies the original array by removing/replacing elements
const myn2 = myArr.splice(1, 3);
console.log("Splice (1, 3):", myn2);
console.log("Original after splice:", myArr);

// 4. Combining Arrays (Spread Operator vs Concat)
const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// Spread operator (Preferred approach)
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log("\nAll Heroes (Spread):", allHeroes);

// 5. Array Utility Methods
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log("\nFlattened Array:", realAnotherArray);

console.log("Is Array?", Array.isArray("JavaScript"));
console.log("Array from String:", Array.from("JavaScript"));
