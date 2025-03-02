function Car(make, model, year, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
}

function Customer(name) {
  this.name = name;
  this.rentedCars = [];
}

Customer.prototype.rentCar = function (car) {
  if (car.isAvailable) {
    car.isAvailable = false;
    this.rentedCars.push(car);
    console.log(`${this.name} has rented a ${car.make} ${car.model}.`);
  } else {
    console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
  }
};

function PremiumCustomer(name, discountRate) {
  Customer.call(this, name);
  this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

function calculateRentalPrice(car, days, customer) {
  let basePrice = 50;
  let typeMultiplier = 1;
  if (car.model.toLowerCase().includes("suv")) typeMultiplier = 1.5;
  if (car.model.toLowerCase().includes("sedan")) typeMultiplier = 1.2;

  let price = basePrice * days * typeMultiplier;
  if (customer instanceof PremiumCustomer) {
    price *= 1 - customer.discountRate / 100;
  }
  return price;
}

Customer.prototype.returnCar = function (car) {
  return new Promise((resolve) => {
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter((c) => c !== car);
      console.log(`${this.name} has returned the ${car.make} ${car.model}.`);
      resolve();
    }, 2000);
  });
};

function Maintenance(car, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(
        `The ${car.make} ${car.model} is now available after maintenance.`
      );
      resolve();
    }, delay);
  });
}

// Demonstration
const car1 = new Car("Toyota", "Camry Sedan", 2022);
const car2 = new Car("Honda", "CR-V SUV", 2021);
const car3 = new Car("Ford", "Focus Sedan", 2020);

const regularCustomer = new Customer("John Doe");
const premiumCustomer = new PremiumCustomer("Jane Smith", 10);

regularCustomer.rentCar.call(regularCustomer, car1);
regularCustomer.rentCar.apply(regularCustomer, [car2]);
regularCustomer.rentCar.bind(regularCustomer)(car2);

premiumCustomer.rentCar(car3);

console.log(
  `Rental price for John (1 day, Camry): $${calculateRentalPrice(
    car1,
    1,
    regularCustomer
  )}`
);
console.log(
  `Rental price for Jane (1 day, Focus): $${calculateRentalPrice(
    car3,
    1,
    premiumCustomer
  )}`
);

regularCustomer.returnCar(car1).then(() => {
  Maintenance(car1, 3000).then(() => {
    premiumCustomer.rentCar(car1);
  });
});
