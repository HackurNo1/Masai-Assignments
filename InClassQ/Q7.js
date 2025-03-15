let arr = [4, 6, 7, 8, 9, 11, 17, 21];
let n = arr.length;
let k = 18;
let i = 0;
let j = n - 1;
while (i < j) {
  if (arr[i] + arr[j] == k) {
    console.log(arr[i] + " " + arr[j]);
    break;
  } else if (arr[i] + arr[j] > k) {
    j--;
  } else {
    i++;
  }
}
