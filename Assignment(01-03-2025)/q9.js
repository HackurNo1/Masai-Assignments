// person.js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// employee.js
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// demonstration.js
const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Software Engineer");

person.introduce();
employee.introduce();
employee.work();
