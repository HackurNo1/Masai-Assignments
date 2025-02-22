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
//   console.log(greeting);
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

// let ans = 0;
// let str = "aba";
// for (let i = 0; i < str.length; i++) {
//   let asc = str[i].charCodeAt();
//   asc -= 96;
//   ans += asc;
// // }
// // console.log(ans);

// // console.log((4 + 4) % 9);

// // let num = 57 - 48;
// // console.log(((num + 4) % 9) + 48);

// // let str = "All-convoYs-9-:Alert1";
// // let key = 4;
// // let ans = "";
// // for (let i = 0; i < str.length; i++) {
// //   if (str[i] == "-" || str[i] == "," || str[i] == ";" || str[i] == "%") {
// //     ans += str[i];
// //   } else if (str[i] >= "a" && str[i] <= "z") {
// //     let num = str[i].charCodeAt() - 97;
// //     ans += String.fromCharCode(((num + 4) % 26) + 97);
// //   } else if (str[i] >= "A" && str[i] <= "Z") {
// //     let num = str[i].charCodeAt() - 65;
// //     ans += String.fromCharCode(((num + 4) % 26) + 65);
// //   } else if (str[i] >= "0" && str[i] <= "9") {
// //     let num = str[i].charCodeAt() - 48;
// //     ans += String.fromCharCode(((num + 4) % 10) + 48);
// //   }
// // }
// // console.log(ans);

// // let st = [1, 2, 3, 4, 4, 4];
// // // console.log(st.pop());

// // function outer() {
// //   let a = 10;
// //   function inner() {
// //     a++;
// //     console.log(a);
// //   }
// //   return inner;
// // }

// // const result = outer();
// // result();

// // function memo(fn) {
// //   let cache = {};
// //   return function (...args) {
// //     let argStringify = JSON.stringify(args);
// //     if (cache[argStringify] === undefined) {
// //       cache[argStringify] = fn(...args);
// //     }
// //     return cache[argStringify];
// //   };
// // }

// // function multiply(num1, num2) {
// //   for (let i = 0; i < 10000; i++) {}
// //   return num1 * num2;
// // }
// // const effecientMul = memo(multiply);
// // console.time("First call");
// // console.log(effecientMul(9467, 7649));
// // console.timeEnd("First call");

// // console.time("Second call");
// // console.log(effecientMul(9467, 7649));
// // console.timeEnd("Second call");

// // function add(a) {
// //   return function (b) {
// //     if (b !== undefined) {
// //       return add(a + b);
// //     } else {
// //       return a;
// //     }
// //   };
// // }

// // console.log(add(5)(2)(3)());

// let no = 111;
// toDecimal(no);
// function toDecimal(val) {
//   let temp = [];
//   while (val > 0) {
//     temp.unshift(val % 10);
//     val = Math.floor(val / 10);
//   }
//   let pow = temp.length - 1;
//   let ans = 0;
//   for (let i = 0; i < temp.length; i++) {
//     ans += temp[i] * 2 ** pow;
//     pow--;
//   }
//   console.log(ans);
// }

// function subString(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let ans = "";
//     for (let j = i; j < s.length; j++) {
//       ans += s[j];
//       console.log(ans);
//       count++;
//     }
//   }
//   return count;
// }
// let s = "Masai";
// console.log(subString(s));

// function subString(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let ans = "";
//     for (let j = i; j < s.length; j++) {
//       if (
//         s[i] == "a" ||
//         s[i] == "i" ||
//         s[i] == "o" ||
//         s[i] == "e" ||
//         s[i] == "u"
//       ) {
//         count++;
//       }
//       ans += s[j];
//       console.log(ans);
//     }
//   }
//   return count;
// }
// let s = "abcdef";
// console.log(subString(s));

// function subString(s) {
//   let ans = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (isPrime(j - i + 1)) {
//         ans++;
//       }
//     }
//   }
//   return ans;
// }

// function isPrime(length) {
//   if (length < 2) return false;
//   let ans = 0;
//   for (let i = 1; i <= length; i++) {
//     if (length % i == 0) {
//       ans++;
//     }
//   }
//   return ans == 2;
// }

// let s = "Masai";
// console.log(subString(s));

// function subString(s, k) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (s[i] == k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// let s = "masai";
// console.log(subString(s, "a"));

// function subString(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (s[i] == s[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// let s = "masai";
// console.log(subString(s));

// function subString(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let sum = 0;
//     for (let j = i; j < s.length; j++) {
//       sum += s[j];
//       if (sum % 2 == 0) count++;
//     }
//   }
//   return count;
// }
// let s = [1, 2, 3, 4];
// console.log(subString(s));

// function brute(k, arr) {
//   for (let i = 0; i < k - 1; i++) {
//     for (let j = i + 1; j < k; j++) {
//       if (i == j) continue;
//       else if (arr[i] == arr[j] * 2 || arr[j] == arr[i] * 2) {
//         console.log("Yes");
//         return;
//       }
//     }
//   }
//   console.log("No");
// }

// brute(5, [5, 0, 9, 7, 20]);

// function brute(n, arr, arr2) {
//   let obj = {};
//   for (let i = 0; i < n; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   for (let i = 0; i < n; i++) {
//     if (obj[arr2[i]]) {
//       console.log(arr2[i]);
//       return;
//     }
//   }
//   console.log("No");
// }

// brute(3, [4, 5, 7], [9, 2, 5]);

// function brute(n, t, arr2) {
//   let count = 0;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr2[i] + arr2[j] == t) {
//         count++;
//       }
//     }
//   }
//   console.log(count);
// }

// brute(5, 9, [3, 0, 6, 2, 7]);

// function brute(n, arr) {
//   for (let i = 1; i < n; i++) {
//     arr[i] += arr[i - 1];
//   }

//   for (let i = 1; i < n - 1; i++) {
//     if (arr[n - 1] - arr[i] == arr[i - 1]) {
//       console.log(i);
//       return;
//     }
//   }
//   console.log(-1);
// }

// // brute(7, [6, 3, 7, 2, 4, 9, 9]);

// let classroom = [
//   { id: 1, name: "Yash" },
//   { id: 2, name: "Alice" },
//   { id: 1, name: "Raju" },
// ];

// for (let i = 0; i < classroom.length; i++) {
//   console.log(classroom[i].name);
// }

// let test = JSON.stringify(classroom);
// console.log(test);

// for (let i = 0; i < test.length; i++) {
//   console.log(test[i]);
// }

// let test2 = JSON.parse(test);
// for (let i = 0; i < test2.length; i++) {
//   console.log(test2[i].name);
// }

// let arr = ["heelom", "dfsfef", "adsdadad"];
// let ans = arr.sort((a, b) => {
//   return a.localeCompare(b);
// });
// console.log(ans);

// function sub(str) {
//   let max = -Infinity;
//   for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//       temp += str[j];
//       max = Math.max(isMax(temp), max);
//     }
//   }
//   return max;
// }
// function isMax(str) {
//   if (str.length == 1) return 1;
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str[i] != str[j]) {
//       return 0;
//     }
//     j--;
//     i++;
//   }
//   return str.length - 1;
// }
// //thisracecarisgood//
// console.log(sub("thisracecarisgood"));

// function sum(n, arr) {
//   let max = -Infinity;
//   for (let i = 1; i < n; i++) {
//     arr[i] += arr[i - 1];
//     max = Math.max(max, arr[i]);
//   }
//   console.log(max);
// }
// sum(5, [5, 4, -1, 7, 8]);

// function perm(str) {
//   let count = 0;
//   for (let i = 1; i < str.length; i++) {
//     for (let j = 0; j < i; j++) {}
//   }
// }

// let obj = {
//   name: "RAJU",
// };

// function greet(callback) {
//   callback();
// }

// greet.call(obj, () => {
//   console.log(`Hello ${this.name}`);
// }); // Output: Hello RAJU
