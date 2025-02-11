// // let arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];
// // let ans = "";
// // for (let i = arr.length - 1; i >= 0; i--) {
// //   ans += arr[i][0] + " ";
// // }
// // for (let i = 1; i < arr.length - 1; i++) {
// //   ans += arr[i][i] + " ";
// // }
// // for (let i = arr.length - 1; i >= 0; i--) {
// //   ans += arr[i][arr.length - 1] + " ";
// // }
// // console.log(ans);

// function factors(x) {
//   let count = 0;
//   for (let i = 0; i <= x; i++) {
//     if (x % i == 0) {
//       count++;
//     }
//   }
//   console.log(count == 2 ? "Prime" : "Not Prime");
// }
// factors(7);

// function slab(x) {
//   if (x <= 50) {
//     x = 80 + x * 3;
//   } else if (x <= 150) {
//     x = 80 + 50 * 3 + (x - 50) * 5;
//   } else {
//     x = 80 + 50 * 3 + 100 * 5 + (x - 150) * 10;
//   }
//   console.log(x);
// }
// slab(178);

// let x = 10;
// for (let i = 0; i < x; i++) {
//   let str = "";
//   for (let j = 0; j < x; j++) {
//     if (i == 0 || i == x - 1 || j == 0 || j == x - 1) {
//       str += "* ";
//     } else {
//       str += "  ";
//     }
//   }
//   console.log(str);
// }

// let x = 7;
// let ans = "";
// for (let i = 1; i <= x; i++) {
//   ans += i;
//   console.log(ans);
// }

// for (let i = 1; i < x; i++) {
//   let out = ans.slice(0, ans.length - i);
//   console.log(out);
// }

// let x = 5;

// for (let i = 0; i < x; i++) {
//   let ans = "";
//   for (let j = 0; j < x; j++) {
//     if ((j + i) % 2 == 0) {
//       ans += "1 ";
//     } else {
//       ans += "0 ";
//     }
//   }
//   console.log(ans);
// }

// let arr = [1, 2, 3, 42, 32, 3];
// let f = -Infinity;
// let s = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > f) {
//     s = f;
//     f = arr[i];
//   } else if (arr[i] != f && arr[i] > s) {
//     s = arr[i];
//   }
// }
// console.log(s);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let n = arr.length;
// let m = arr[0].length;

// let arr2 = [];
// for (let i = 0; i < m; i++) {
//   arr2[i] = [];
// }

// // for (let i = 0; i < n; i++) {
// //   for (let j = 0; j < m; j++) {
// //     arr2[j][i] = arr[i][j];
// //   }
// // }
// // console.log(arr2);

// let arr = ["banana", "apple", "grapes", "mango"];
// arr.sort();
// console.log(arr);

// function divide(arr, st, ed) {
//   if (st >= ed) return;
//   let mid = Math.floor(st + (ed - st) / 2);
//   divide(arr, st, mid);
//   divide(arr, mid + 1, ed);
//   merge(arr, st, mid, ed);
// }

// function merge(arr, st, mid, ed) {
//   let left = [];
//   let right = [];
//   for (let i = 0; i < mid + 1 - st; i++) left[i] = arr[st + i];
//   for (let i = 0; i < ed - mid; i++) right[i] = arr[mid + 1 + i];

//   let i = 0;
//   let j = 0;
//   let k = st;
//   while (i <= left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       arr[k++] = left[i++];
//     } else {
//       arr[k++] = right[j++];
//     }
//   }

//   while (i < left.length) {
//     arr[k++] = left[i++];
//   }
//   while (j < right.length) {
//     arr[k++] = right[j++];
//   }
// }

// let arr = ["banana", "apple", "appld", "grapes", "mango"];

// divide(arr, 0, arr.length - 1);
// console.log(arr);

// let n = 10;
// let temp = "";
// for (let i = 0; i < n; i++) {
//   temp += "* ";
// }
// console.log(temp);

// for (let i = 1; i <= n - 2; i++) {
//   let temp2 = "";
//   for (let j = 1; j <= n - i - 1; j++) {
//     temp2 += "  ";
//   }
//   temp2 += "*";
//   console.log(temp2);
// }
// console.log(temp);

// let n = 8;
// let count = 1;
// for (let i = 1; i <= n; i++) {
//   let temp = "";
//   for (let j = 1; j <= i; j++) {
//     temp += count + " ";
//     count++;
//   }
//   console.log(temp);
// }
