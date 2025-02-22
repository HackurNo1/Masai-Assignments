function mul(a, b) {
  console.log(`${a} ${this.a * this.b} ${b}`);
}

// console.log(mul.apply([1, 2]));

let obj = {
  a: 2,
  b: 3,
};

mul.apply(obj, ["The product of these two no. is ", "done!!"]);
// mul.apply(null, [1, 2]);
