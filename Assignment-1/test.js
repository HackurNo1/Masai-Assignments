let no = 6;
let sum = 0;
let i = 1;
while (i < 6) {
  if (no % i == 0) {
    sum += i;
  }
  i++;
}
if (sum == no) console.log("num is a perfect number");
else console.log("num is not a perfect number");
