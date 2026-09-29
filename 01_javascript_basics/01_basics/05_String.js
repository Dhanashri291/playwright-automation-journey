// 1. Primitive Creation & Template Literals
const name = "Dhanashri";
const repoCount = 10;
const city = "Pune";

// Modern String Interpolation
console.log(`Hello, my name is ${name}, I live in ${city}, and my repo count is ${repoCount}.`);

// 2. String Object Creation (Non-primitive)
const gameName = new String('playwright-journey');

console.log("\n--- Character Access ---");
console.log("Character at index 0:", gameName.charAt(0));
console.log("Index of 'w':", gameName.indexOf('w'));
console.log("Last character using .at():", gameName.at(-1));

console.log("\n--- Substrings & Manipulation ---");
// Extracting parts
const subStringResult = gameName.substring(0, 10);      // "playwright"
const slicedResult = gameName.slice(-7);                // "journey"
console.log("Substring (0, 10):", subStringResult);
console.log("Slice (-7):", slicedResult);

console.log("\n--- Trimming & Replacing ---");
const url = "  https://github.com/Dhanashri291/playwright-automation-journey  ";
console.log("Trimmed URL:", url.trim());
console.log("Replaced spaces:", url.trim().replace("Dhanashri291", "dhanashri"));

console.log("\n--- Searching & Splitting ---");
console.log("Includes 'automation'?:", url.includes("automation"));
console.log("Split by hyphen:", gameName.split("-"));