const arr = ["a", "b", "c"];

console.log(arr);
arr.push("d");
console.log(arr);

// here we have a ref. type variable so here "arr" is not directly pointing towards the RHS which is ******["a", "b", "c"]*******
// instead of that "arr" is pointing towards some address lets say 123,and that address 123 has the RHS *******["a", "b", "c"]******* stored in it.
