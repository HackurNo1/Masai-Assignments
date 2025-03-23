// // let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// //   let j = i + 1;
// //   while (j < arr.length && arr[i] == arr[j]) {
// //     j++;
// //   }
// //   i = j - 1;
// // }

// // let arr = [1, 3, 2, 4, 2, 4, 5, 5, 3];
// // let arr2 = [];
// // const s = new Set();
// // let j = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   if (!s.has(arr[i])) {
// //     s.add(arr[i]);
// //     arr2[j] = arr[i];
// //     j++;
// //   }
// // }
// // console.log(arr2);

// // let arr = [2, 2, 5, 7, 9, 17];
// // let arr2 = [1, 2, 10, 12, 13];
// // let main = [];
// // let i = 0;
// // let j = 0;
// // while (i < arr.length && j < arr2.length) {
// //   if (arr[i] > arr2[j]) {
// //     main.push(arr2[j]);
// //     j++;
// //   } else {
// //     main.push(arr[i]);
// //     i++;
// //   }
// // }
// // while (i < arr.length) {
// //   main.push(arr[i]);
// //   i++;
// // }
// // while (j < arr2.length) {
// //   main.push(arr2[j]);
// //   j++;
// // }
// // console.log(main);

// let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let units = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = arr.length - 1; j > i; j--) {
//     let distance = j - i;
//     if (arr[j] < arr[i]) {
//       let temp = arr[j] * distance;
//       if (temp > units) {
//         units = temp;
//       }
//     } else {
//       let temp = arr[i] * distance;
//       if (temp > units) {
//         units = temp;
//       }
//     }
//   }
// }
// console.log(units);

// let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// let sub = 4;
// let max = -Infinity;
// for (let i = 0; i < arr.length - sub; i++) {
//   let sum = 0;
//   for (let j = i; j < sub; j++) {
//     sum += arr[j];
//   }
//   sub++;
//   if (sum > max) max = sum;
// }
// for (let i = 1; i < arr.length; i++) {
//   arr[i] += arr[i - 1];
// }
// console.log(arr);
// for (let i = sub - 1; i < arr.length; i++) {
//   let temp = 0;
//   if (i != 0) temp = arr[i - sub];
//   if (arr[i] - temp > max) max = arr[i] - temp;
// }
// console.log(max);

let arr = [1, 4, 20, 3, 10, 5];
let t = 33;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum += arr[j];
//     if (sum == t) {
//       console.log(true);
//       break;
//     }
//   }
// // }
// let sum = 0;
// let end = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (sum < t) sum += arr[i];
//   if (sum == t) {
//     console.log(true);
//     break;
//   }
//   while (end < arr.length && sum > t) {
//     sum -= arr[end];
//     end++;
//   }
// }

// let m = new Set([1, 3, 53, 4]);
// if (m.has(53)) {
//   m.delete(53);
// }
// console.log(m);
