const arr = [
  "Nitin",
  24,
  true,
  {
    person: {
      name: "gopi ",
      age: 24,
    },
  },
];
console.log(arr);

// for (let a of arr) {
//   console.log(a);
// }

console.log(arr.map((arrays) => "arrays :" + arrays));



//    javaScript objects and arrays are reference types , that's why even after storing it as "const" we are still able to change/edit it without getting any errors.

