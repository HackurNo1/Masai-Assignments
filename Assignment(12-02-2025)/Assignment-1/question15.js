let age = 10;

function global() {
  function displayAge() {
    console.log(age);
  }

  function changeAge() {
    age = 20;
  }

  displayAge(); // Logs 10
  changeAge();
  displayAge(); // Logs 20
}

global();
