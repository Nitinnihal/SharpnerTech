const person = {
  name: "Nitin Nihal",
  age: 24,
  hobbies: ["a", "b", "c"],
  greet() {
    console.log("hello world !!!");
  },
};
// const printName = (personData) => {
//   console.log(personData.name);
// };
// const printName = ({ name }) => {           //destructuring object
//   console.log(name);
// };
// printName(person);

/**The person object is created.
The printName function is defined to log the name property of the passed object.
The printName function is invoked with the person object as an argument.
Inside printName, the name property of the person object is accessed and logged to the console, resulting in the output "Nitin Nihal". */

// const { name, age } = person; // object destructuring

// console.log( name, age);

// ARRAY DESTRUCTURING

const hobbies = ["music", "Reading", "swimming", "xyz", "abc", "pqr"];
const [h1, h2, h3, ...hRest] = hobbies;
console.log(h1, h2, h3, hRest);
console.log(h2, h1, h3);

// RENAMING VARIABLES WHILE DESTRUCTURING

const { name: personName, age: personAge } = person; // we have renamed the properies of person object while destructuring it.
console.log(personName);
