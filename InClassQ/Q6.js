// // // let count = 0;
// // // let time = setInterval(() => {
// // //   console.log("Loading...");
// // //   count++;
// // //   if (count == 5) {
// // //     clearInterval(time);
// // //     console.log("Loaded Successfully");
// // //   }
// // // }, 1000);

// // // function timer(duration, onComplete) {
// // //   setTimeout(() => {
// // //     onComplete(`Timer of duration ${duration} is done`);
// // //   }, duration);
// // // }

// // // timer(3000, (message) => {
// // //   console.log(message);
// // // });

// // // function request(callback) {
// // //   setTimeout(() => {
// // //     console.log("Network req");
// // //     callback();
// // //   }, 2000);
// // // }

// // // function recieved(callback) {
// // //   setTimeout(() => {
// // //     console.log("Network received");
// // //     callback();
// // //   }, 2000);
// // // }

// // // request(() => {
// // //   recieved(() => {
// // //     console.log("All task Completed");
// // //   });
// // // });

// // function task1() {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       res();
// //       console.log("Task 1");
// //     }, 1000);
// //   });
// // }

// // function task2() {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       res();
// //       console.log("Task 2");
// //     }, 1000);
// //   });
// // }

// // function task3() {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       res();
// //       console.log("Task 3");
// //     }, 1000);
// //   });
// // }

// // task1().then(() => {
// //   task2().then(() => {
// //     task3().then(() => {
// //       setTimeout(() => {
// //         console.log("all promise are done");
// //       }, 1000);
// //     });
// //   });
// // });

// // function stone(arr, n) {
// //   let sum = 0;
// //   for (let i = 0; i < n - 1; i++) {
// //     sum += arr[i];
// //     let sum2 = 0;
// //     for (let j = n - 1; j > i; j--) {
// //       sum2 += arr[j];
// //       if (sum == sum2) {
// //         console.log(sum);
// //         return;
// //       }
// //     }
// //   }
// //   console.log(-1);
// // }

// // stone([5, 10, 15, 20, 25, 30], 6);

// // function size(str, gtr) {
// //   let count = 0;
// //   let count2 = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] == "X") count++;
// //   }
// //   for (let i = 0; i < str.length; i++) {
// //     if (gtr[i] == "X") count2++;
// //   }
// //   let temp1 = str[str.length - 1];
// //   let temp2 = gtr[gtr.length - 1];
// //   if (temp1 == temp2) {
// //     if (count > count2) {
// //       console.log("<");
// //     } else {
// //       console.log(">");
// //     }
// //   } else if (temp1 == "S" && (temp2 == "L" || temp2 == "M")) {
// //     console.log("<");
// //   } else if (temp) {
// //   }
// // }

// // size("XXXS", "XS");
// // size("XXXL", "XL");
// // size("XL", "M");
// // size("XXL ", "XXL");

// function check(n, arr) {
//   let ans = 0;
//   for (let i = 1; i < N - 1; i++) {
//     let flag = true;
//     for (let j = i + 1; j < N; j++) {
//       if (arr[j] < arr[i]) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       for (let j = i - 1; j >= 0; j--) {
//         if (arr[i] < arr[j]) {
//           flag = false;
//           break;
//         }
//       }
//     }
//     if (flag) {
//       console.log(arr[i]);
//       return;
//     }
//   }
//   console.log(-1);
// }

// check(5, [7, 1, 9, 13, 14, 16, 21, 18]);

// function span(n, arr) {
//   let arr2 = [];
//   for (let i = 0; i < n; i++) {
//     let j = i - 1;
//     let count = 1;
//     while (j >= 0 && arr[i] > arr[j]) {
//       count++;
//       j--;
//     }
//     arr2.push(count);
//   }
//   console.log(arr2);
// }

// span(6, [7, 9, 4, 10, 13, 15]);

// function test(str) {
//   let obj = {};
//   let j = 0;

//   for (let i = 97; i < 123; i++) {
//     obj[String.fromCharCode(i)] = 0;
//   }
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]]++;
//   }
//   console.log(obj);
// }
// test("aaeiooou");
