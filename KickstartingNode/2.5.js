const name = "Nitin";
let age = 24;
let hasHobby = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is" +
    " " +
    userName +
    " " +
    ", age is" +
    " " +
    userAge +
    " " +
    "and the user has hobby:" +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobby));

// other ways of writing arrow function

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3));

// this add function can be written as

const add = (a, b) => a + b;

console.log(add(2, 3));

const product = (a, b) => a * b;
console.log(product(3, 4));
