function person(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = function () {
    console.log(`Name : ${this.name} Age : ${this.age}`);
  };
}

let Yash = new person("Yash", 21);
let display = Yash.displayInfo.bind(Yash);
display();
