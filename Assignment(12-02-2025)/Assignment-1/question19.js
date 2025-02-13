function fact(x, ans) {
  if (x == 0) return ans;
  ans *= x;
  return fact(--x, ans);
}

let x = 5;

console.log(
  typeof x == "number"
    ? x >= 0
      ? fact(x, 1)
      : `${x} is less then 0`
    : `${x} is not a number`
);
