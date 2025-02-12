// // // let arr = [
// // //   [1, 2, 3],
// // //   [4, 5, 6],
// // //   [7, 8, 9],
// // // ];
// // // let ans = "";
// // // for (let i = arr.length - 1; i >= 0; i--) {
// // //   ans += arr[i][0] + " ";
// // // }
// // // for (let i = 1; i < arr.length - 1; i++) {
// // //   ans += arr[i][i] + " ";
// // // }
// // // for (let i = arr.length - 1; i >= 0; i--) {
// // //   ans += arr[i][arr.length - 1] + " ";
// // // }
// // // console.log(ans);

// // function factors(x) {
// //   let count = 0;
// //   for (let i = 0; i <= x; i++) {
// //     if (x % i == 0) {
// //       count++;
// //     }
// //   }
// //   console.log(count == 2 ? "Prime" : "Not Prime");
// // }
// // factors(7);

// // function slab(x) {
// //   if (x <= 50) {
// //     x = 80 + x * 3;
// //   } else if (x <= 150) {
// //     x = 80 + 50 * 3 + (x - 50) * 5;
// //   } else {
// //     x = 80 + 50 * 3 + 100 * 5 + (x - 150) * 10;
// //   }
// //   console.log(x);
// // }
// // slab(178);

// // let x = 10;
// // for (let i = 0; i < x; i++) {
// //   let str = "";
// //   for (let j = 0; j < x; j++) {
// //     if (i == 0 || i == x - 1 || j == 0 || j == x - 1) {
// //       str += "* ";
// //     } else {
// //       str += "  ";
// //     }
// //   }
// //   console.log(str);
// // }

// // let x = 7;
// // let ans = "";
// // for (let i = 1; i <= x; i++) {
// //   ans += i;
// //   console.log(ans);
// // }

// // for (let i = 1; i < x; i++) {
// //   let out = ans.slice(0, ans.length - i);
// //   console.log(out);
// // }

// // let x = 5;

// // for (let i = 0; i < x; i++) {
// //   let ans = "";
// //   for (let j = 0; j < x; j++) {
// //     if ((j + i) % 2 == 0) {
// //       ans += "1 ";
// //     } else {
// //       ans += "0 ";
// //     }
// //   }
// //   console.log(ans);
// // }

// // let arr = [1, 2, 3, 42, 32, 3];
// // let f = -Infinity;
// // let s = -Infinity;
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] > f) {
// //     s = f;
// //     f = arr[i];
// //   } else if (arr[i] != f && arr[i] > s) {
// //     s = arr[i];
// //   }
// // }
// // console.log(s);

// // let arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // let n = arr.length;
// // let m = arr[0].length;

// // let arr2 = [];
// // for (let i = 0; i < m; i++) {
// //   arr2[i] = [];
// // }

// // // for (let i = 0; i < n; i++) {
// // //   for (let j = 0; j < m; j++) {
// // //     arr2[j][i] = arr[i][j];
// // //   }
// // // }
// // // console.log(arr2);

// // let arr = ["banana", "apple", "grapes", "mango"];
// // arr.sort();
// // console.log(arr);

// // function divide(arr, st, ed) {
// //   if (st >= ed) return;
// //   let mid = Math.floor(st + (ed - st) / 2);
// //   divide(arr, st, mid);
// //   divide(arr, mid + 1, ed);
// //   merge(arr, st, mid, ed);
// // }

// // function merge(arr, st, mid, ed) {
// //   let left = [];
// //   let right = [];
// //   for (let i = 0; i < mid + 1 - st; i++) left[i] = arr[st + i];
// //   for (let i = 0; i < ed - mid; i++) right[i] = arr[mid + 1 + i];

// //   let i = 0;
// //   let j = 0;
// //   let k = st;
// //   while (i <= left.length && j < right.length) {
// //     if (left[i] < right[j]) {
// //       arr[k++] = left[i++];
// //     } else {
// //       arr[k++] = right[j++];
// //     }
// //   }

// //   while (i < left.length) {
// //     arr[k++] = left[i++];
// //   }
// //   while (j < right.length) {
// //     arr[k++] = right[j++];
// //   }
// // }

// // let arr = ["banana", "apple", "appld", "grapes", "mango"];

// // divide(arr, 0, arr.length - 1);
// // console.log(arr);

// // let n = 10;
// // let temp = "";
// // for (let i = 0; i < n; i++) {
// //   temp += "* ";
// // }
// // console.log(temp);

// // for (let i = 1; i <= n - 2; i++) {
// //   let temp2 = "";
// //   for (let j = 1; j <= n - i - 1; j++) {
// //     temp2 += "  ";
// //   }
// //   temp2 += "*";
// //   console.log(temp2);
// // }
// // console.log(temp);

// // let n = 5;
// // let count = 1;
// // for (let i = 1; i <= n; i++) {
// //   let temp = "";
// //   for (let j = 1; j <= i; j++) {
// //     temp += count + " ";
// //     count++;
// //   }
// //   console.log(temp);
// // }

// // let n = 4;

// // for (let i = 1; i <= n; i++) {
// //   let temp = "";
// //   for (let j = 1; j <= n - i; j++) {
// //     temp += " ";
// //   }
// //   for (let k = 1; k <= i * 2 - 1; k++) {
// //     temp += "*";
// //   }
// //   console.log(temp);
// // }

// let n = 5;
// for (let i = 1; i <= n - 1; i++) {
//   let temp = "";
//   let spac = "";
//   for (let j = 1; j <= i; j++) {
//     temp += "* ";
//   }
//   for (let j = 1; j <= 2 * (n - i) - 1; j++) {
//     spac += "  ";
//   }
//   console.log(temp + spac + temp);
// }
// let temp2 = "";
// for (let i = 1; i <= n * 2 - 1; i++) {
//   temp2 += "* ";
// }
// console.log(temp2);

// for (let i = n - 1; i >= 1; i--) {
//   let temp = "";
//   let spac = "";
//   for (let j = 1; j <= i; j++) {
//     temp += "* ";
//   }
//   for (let j = 1; j <= 2 * (n - i) - 1; j++) {
//     spac += "  ";
//   }

//   console.log(temp + spac + temp);
// }

// // function getUser() {
// //   return {
// //     name: "John Doe",
// //     age: 42,
// //     email: "john@example.com",
// //   };
// // }

// // const { name, email } = getUser();
// // console.log(`Name: ${name}, Email: ${email}`);

// // So we all love Inception right ? if not please watch the movie , but here's a problem that we develper face when we create a systeme where we can store all the data together ,
// // when storing data we have to think in these terms -> accessibility | readability , now below is how we can store data in readable format , but then the accessibility decreases a bit , but but but , we can use destructuring to fix it , let's see how :

// const movie = {
//   title: "Inception",
//   year: 2010,
//   director: {
//     name: "Christopher Nolan",
//     born: 1970,
//   },
//   cast: [
//     { name: "Leonardo DiCaprio", character: "Cobb" },
//     { name: "Elliot Page", character: "Ariadne" },
//     { name: "Joseph Gordon-Levitt", character: "Arthur" },
//   ],
// };

// // Multi-level destructuring
// // const {
// //   title,
// //   year,
// //   director: { name: directorName, born: directorBornYear },
// //   cast: [
// //     { name: leadActorName, character: leadCharacter },
// //     { name: secondLead, character: leadCharacter2 },
// //   ],
// // } = movie;

// // console.log(
// //   `The movie ${title} (released in ${year}), directed by ${directorName} (born in ${directorBornYear}), stars ${leadActorName} as ${leadCharacter}.`
// // );
// // console.log(leadActorName, leadActorName, secondLead, leadCharacter2);
// // for (let key in movie) {
// // //   console.log(movie[key]);
// // // }
// // const {
// //   cast: [a, { name }],
// // } = movie;
// // console.log(a, name);
// // const original = { name: "Original Name" };
// // const copy = { ...original, modified: true };
// // console.log(copy);

// // let n = 5;
// // for (let i = 1; i <= n - 1; i++) {
// //   let temp = "";
// //   for (let j = 1; j <= n - i + 1; j++) {
// //     temp += "  ";
// //   }
// //   for (let j = 1; j <= i * 2 - 1; j++) {
// //     temp += "* ";
// //   }
// //   console.log(temp);
// // }
// // let spac = "";
// // for (let i = 0; i < n; i++) {
// //   spac += "  ";
// // }
// // console.log(spac + "|");

// // let n = 4;
// // let m = 5;

// // for (let i = 1; i <= n; i++) {
// //   let temp = "";
// //   if (i % 2 == 0) {
// //     temp += "  ";
// //   }
// //   for (let j = 0; j < m; j++) {
// //     temp += "[] ";
// //   }
// //   console.log(temp);
// // }

// let arr = [1, 4, 6, 23, 4, 5, 6, 7];
// console.log(Math.max(...arr));

// let func = (num) => {
//   let fact = 1;
//   fact *= num;
// };

// let arr = [122, 3, 4, 54, 5];
// let sum = 0;
// sum += arr.reduce((num, acc) => num + acc, 0);
// console.log(sum);

// let arr = [122, 3, 4, 54, 5];

// let sum = arr.map((num) => num + 1);
// console.log(sum);

// const [a = 5, b = 10] = [, 1];
// // console.log(a, b);

// let arr = [1, 2, 3, 4, 6, 5];
// let [, a = 3] = arr;
// // console.log(arr);

// let obj = {
//   name: "Yash",
//   age: "21",
// };

// let { name, age } = obj;
// console.log(name, age);

// var input = null;
// var output = undefined || 10;
// var output2 = input ?? 10;
// console.log(output);
// console.log(output2);

// var temp = {
//   a: 1,
//   b: [{ c: 2 }, { d: 3 }],
// };
// console.log(temp.b[0].c);

// console.log(name);
// var name = "Alice";
// console.log(name);

// greet();
// function greet() {
//   console.log("Hello World");
// }

// var greeting = "Hello";
// function outer() {
//   var greeting = "Hi";
//   function inner() {
//     console.log(greeting);
//   }
//   inner();
// }
// outer();

// if (true) {
//   var a = 20;
// }
// console.log(a);
