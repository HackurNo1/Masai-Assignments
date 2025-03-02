function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    describeCar: function () {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
}

// Example usage:
const myCar = createCar("Toyota", "Camry", 2022);
myCar.describeCar();
