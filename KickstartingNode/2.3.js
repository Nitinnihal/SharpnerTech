const name = "Nitin";
let age = 24;
let hasHobby = true;

function summarizeUser(userName, userAge, userHasHobby) {
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
}

console.log(summarizeUser(name, age, hasHobby));
