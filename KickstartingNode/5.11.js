// Async code and promises

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("Timer is done."); //callback function
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000); //async code

// console.log("Hello");
// console.log("Hiii !!!");

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done !");
    }, 1500);
  });
  return promise;
};

// setTimeout(() => {
//   console.log("Timer is done.");
//   fetchData().then((text) => {
//     console.log(text);
//   });
// }, 2000);

// the advantage of using promise is that even if we want to use multiple promises we don't have to use complex callbacks we can simply return of function and then we can use .then() as demonstrated below

// setTimeout(() => {
//   console.log("Timer is done.");
//   fetchData()
//     .then((text) => {
//       console.log(text);
//       return fetchData();
//     })
//     .then((text2) => {
//       console.log(text2);
//     });
// }, 2000);

// console.log("Hello");
// console.log("Hiii !!!");

console.log("Start");

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async operation done");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

console.log("End");
