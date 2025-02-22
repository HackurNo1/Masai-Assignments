let arr = ["Charlie", "Alice", "Bob"];

let sortedArray = arr.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(sortedArray);
