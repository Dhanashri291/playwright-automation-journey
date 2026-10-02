// 1. Object Creation & Literal Syntax
const user = {
    name: "Alex",
    age: 28,
    isStudent: false,
    hobbies: ["reading", "coding"],
    "home city": "Pune" // Key with space requires quotes
};

console.log("--- Basic Access ---");
console.log(`Name: ${user.name}`); // Dot notation
console.log(`City: ${user["home city"]}`); // Bracket notation

// 2. Modifying & Adding Properties
user.age = 29;
user.role = "Automation Engineer";
console.log("\n--- Updated User ---");
console.log(user);

// 3. Object Methods and 'this' Keyword
const calculator = {
    num1: 10,
    num2: 5,
    add() {
        return this.num1 + this.num2;
    },
    multiply() {
        return this.num1 * this.num2;
    }
};

console.log("\n--- Object Methods ---");
console.log(`Addition: ${calculator.add()}`);
console.log(`Multiplication: ${calculator.multiply()}`);

// 4. Object Utility Methods
console.log("\n--- Object Utilities ---");
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// 5. Destructuring & Spread Operator
const { name, role } = user;
console.log(`\nDestructured: ${name} works as ${role}`);

const userWithDefaults = { ...user, country: "India" };
console.log("Merged Object:", userWithDefaults);
