var name = "Nitin";
var age = 24;
var hasHobby = true;

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
