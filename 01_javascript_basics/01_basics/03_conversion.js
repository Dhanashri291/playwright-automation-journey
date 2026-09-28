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
