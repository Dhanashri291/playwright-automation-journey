// 1. Basic Function
function greet() {
    console.log("Hello, Dhanashree!");
}

greet();


// 2. Function with Parameters
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// 3. Function with Multiple Parameters
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

console.log("Total Salary:", calculateSalary(25000, 5000));


// 4. Function with Default Parameter
function welcome(name = "User") {
    console.log(`Welcome ${name}`);
}

welcome();
welcome("Dhanashree");


// 5. Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));


// 6. Arrow Function
const subtract = (a, b) => {
    return a - b;
};

console.log("Subtraction:", subtract(20, 8));


// 7. Short Arrow Function
const square = number => number * number;

console.log("Square:", square(6));


// 8. Check Even or Odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// 9. Find Maximum Number
function findMaximum(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Maximum:", findMaximum(10, 25, 15));


// 10. Login Validation
function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    }

    return "Invalid Username or Password";
}

console.log(login("admin", "1234"));
console.log(login("user", "1234"));
