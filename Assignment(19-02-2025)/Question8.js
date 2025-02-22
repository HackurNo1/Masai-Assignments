let obj = {
  name: "Yash",
  age: "21",
};
function greet() {
  console.log(`My name is ${this.name} and i'm ${this.age}  years old`);
}

greet.call(obj);
