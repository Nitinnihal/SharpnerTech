/**********SPREAD OPERATOR */

// const person = {
//   name: "Nitin",
//   age: 24,
//   greet: () => {
//     console.log("Nameste from BHARAT.");
//   },
// };

// const arr = ["a", "b", "c"];
// console.log(arr);

// const copiedarr = arr.slice(1);
// console.log(copiedarr);

// const copiedarr1 = [arr];
// console.log(copiedarr1);
// in the above statement it seems like it is copy of arr, but we have just made a new array with name copiedarr1 and we have saved an array inside it(nested array) . outer array(copiedarr1) here has just one element in it which is inner array(arr).

// const copiedPerson = { ...person };
// console.log(copiedPerson);
// const copiedarr2 = [...arr, "d", "e", "f"];
// we can't add person object to this copiedarr2.coz  person is an object and we  want to include its properties in the new array, we'll need to convert those properties into an array or spread them individually.
// console.log(copiedarr2);

/* ***** REST OPERATOR****/


const toArr0 = (args1,args2,args3) => {
    return [args1,args2,args3];
}
console.log(toArr0(1,2,3,4));   //here were are trying to call 4 values but we have passed only 3 arguments in the funnction above ,although javaScript in not throwing an error still that 4th value is not printed and it is useless. also this function  is too rigid to work with, and adding new arguments is a lengthy process .

const toArr = (...args) => {
  return args;
};
console.log(toArr(1, 2, 3, 4, 5));
