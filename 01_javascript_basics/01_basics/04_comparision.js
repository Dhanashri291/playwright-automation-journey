
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
