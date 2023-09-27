const array = ["apple", "oranges", " ", "mango", " ", "lemon"];

//  ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon']

console.log(array.map((item) => (item.trim() === "" ? "empty string" : item)));

console.log(array.map((item) => (item.length === 1 ? "empty string" : item)));

const transformedArray = array.map((item) => {
  if (item === " ") {
    return "empty string";
  } else {
    return item;
  }
});

console.log(transformedArray);
