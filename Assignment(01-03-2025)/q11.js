function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.getDetails = function () {
  return `${this.name} - $${this.price}, Quantity: ${this.quantity}`;
};

function Electronics(name, price, quantity, brand, model) {
  Product.call(this, name, price, quantity);
  this.brand = brand;
  this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function () {
  console.log(`${this.name} is now ON.`);
};
Electronics.prototype.powerOff = function () {
  console.log(`${this.name} is now OFF.`);
};

function Clothing(name, price, quantity, size, material) {
  Product.call(this, name, price, quantity);
  this.size = size;
  this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.wash = function () {
  console.log(`Washing the ${this.material} ${this.name}.`);
};

function Book(name, price, quantity, author, genre) {
  Product.call(this, name, price, quantity);
  this.author = author;
  this.genre = genre;
}

Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

Book.prototype.read = function () {
  console.log(`Reading "${this.name}" by ${this.author}.`);
};

const laptop = new Electronics("Laptop", 1200, 5, "Dell", "XPS 15");
console.log(laptop.getDetails());
laptop.powerOn();

const tshirt = new Clothing("T-Shirt", 20, 10, "L", "Cotton");
console.log(tshirt.getDetails());
tshirt.wash();

const novel = new Book(
  "The Great Gatsby",
  15,
  7,
  "F. Scott Fitzgerald",
  "Fiction"
);
console.log(novel.getDetails());
novel.read();
