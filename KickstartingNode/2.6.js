const person = {
  name: "Nitin",
  age: 24,
  greet: () => {
    console.log("Nameste from BHARAT.");
  },
  // if we will use {this} keyword as we are using below in "meet1" it will give undefined on console coz, the this keyword used here has global scope and not just limited to this object, so we can solve this by the alternatives written below the method "meet1"


  // meet1:()=> {
  //   console.log("hi I'm " + this.name);
  // },
  // meet() {
  //   console.log("hi I'm " + this.name);
  // },
  meet: function () {
    console.log("hi I'm " + this.name);
  },
};
person.greet();
person.meet();
// person.meet1();
