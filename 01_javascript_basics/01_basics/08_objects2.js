// ==========================================
// 1. OBJECT DESTRUCTURING
// ==========================================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Accessing without destructuring (traditional way):
// console.log(course.courseInstructor);

// Destructuring key directly:
const { courseInstructor } = course;
console.log(courseInstructor); // Output: hitesh

// Destructuring with custom variable alias:
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: hitesh


// ==========================================
// 2. DESTRUCTURING IN FUNCTIONS / REACT PROPS
// ==========================================

// Traditional Props handling:
// const Navbar = (props) => {
//     return props.company;
// }

// Destructured Props handling:
const Navbar = ({ company }) => {
    return company;
};

console.log(Navbar({ company: "Chai code" })); // Output: Chai code


// ==========================================
// 3. JSON API STRUCTURE (Conceptual Reference)
// ==========================================

/*
  Standard JSON Object syntax (Keys MUST be double-quoted strings):
  {
      "name": "hitesh",
      "coursename": "js in hindi",
      "price": "free"
  }

  Standard JSON Array of Objects:
  [
      { "id": 1, "status": "active" },
      { "id": 2, "status": "pending" }
  ]
*/
