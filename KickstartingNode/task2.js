const prod = (a, b) => a * b;

console.log(prod(2, 3));

const student = {
  name: "Nitin",
  Qualification: "B.E.",
  age: 24,
  //   greet: function () {
  //     console.log(
  //       "HI my name is " +
  //         this.name +
  //         " and i'm a " +
  //         this.Qualification +
  //         " Graduate."
  //     );
  //   },
  greet() {
    console.log(
      "HI my name is " +
        this.name +
        " and i'm a " +
        this.Qualification +
        " Graduate."
    );
  },
};

student.greet();
