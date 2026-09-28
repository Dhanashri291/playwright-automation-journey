// ==========================================
// 1. TYPE CONVERSION TO NUMBER
// ==========================================

let score = "33";
let scoreWithAlpha = "33abc";
let emptyValue = null;

// Converting String "33" to Number
let convertedScore = Number(score);
console.log(typeof convertedScore); // number
console.log(convertedScore);        // 33

// Converting String with characters "33abc" to Number
let convertedAlpha = Number(scoreWithAlpha);
console.log(typeof convertedAlpha); // number (Type becomes 'number' even if value is NaN)
console.log(convertedAlpha);        // NaN (Not a Number)

// Converting null to Number
let convertedNull = Number(emptyValue);
console.log(typeof convertedNull);  // number
console.log(convertedNull);         // 0

/* 
  NUMBER CONVERSION SUMMARY:
  - "33"      => 33
  - "33abc"   => NaN (Not a Number)
  - null      => 0
  - undefined => NaN
  - true      => 1
  - false     => 0
*/


// ==========================================
// 2. TYPE CONVERSION TO BOOLEAN
// ==========================================

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn);        // false

/* 
  BOOLEAN CONVERSION SUMMARY:
  - 1          => true
  - 0          => false
  - "" (empty) => false
  - "dhanashri"=> true
*/


// ==========================================
// 3. TYPE CONVERSION TO STRING
// ==========================================

let num = 4;
let stringNum = String(num);
console.log(typeof stringNum); // string
console.log(stringNum);        // "4"


// ==========================================
// 4. TRICKY OPERATIONS & UNARY +
// ==========================================

console.log(+true); // 1 (Unary + converts boolean true to numeric 1)
console.log(+"");   // 0 (Unary + converts empty string to numeric 0)


// ==========================================
// 5. COMPARISONS WITH NULL & UNDEFINED
// ==========================================

// --- NULL COMPARISONS ---
console.log(null > 0);  // false
console.log(null == 0); // false (Equality check '==' treats null only equal to undefined or null)
console.log(null >= 0); // true  (Relational comparison '>=' converts null to a number: 0)

/* 
  WHY THIS HAPPENS FOR NULL:
  - An equality check (==) and comparisons (>, <, >=, <=) work differently in JavaScript.
  - Comparisons convert 'null' to a number, treating it as 0.
  - Therefore, (null >= 0) is true, but (null > 0) is false.
*/

// --- UNDEFINED COMPARISONS ---
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

/* 
  WHY THIS HAPPENS FOR UNDEFINED:
  - 'undefined' gets converted to 'NaN' in numeric comparisons.
  - Any comparison involving 'NaN' with numbers yields 'false'.
*/