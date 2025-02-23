let arr = [16, 17, 4, 3, 5, 2];
let arr2 = [];

for (let i = 0; i < arr.length - 1; i++) {
  flag = true;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      flag = false;
      break;
    }
  }
  if (flag) arr2.push(arr[i]);
}
arr2.push(arr[arr.length - 1]);
console.log(arr2);
