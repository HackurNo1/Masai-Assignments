function categoryCount(input) {
  const ans = input.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return ans;
}

function sorted(val) {
  return Object.entries(val)
    .sort((a, b) => b[1] - a[1])
    .map((entries) => entries[0]);
}

const Input = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];
const countCategory = categoryCount(Input);
console.log(countCategory);

const sorty = sorted(countCategory);
console.log(sorty);
