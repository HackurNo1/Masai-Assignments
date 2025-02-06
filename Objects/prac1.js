// // // let obj = {
// // //   firstname: "Yash",
// // //   lastname: "Thakur",
// // //   phone: 6280196024,
// // //   subject: "Science",
// // //   hobby: "Cricket",
// // // };
// // // // console.log(obj.lastname);
// // // // console.log(obj["phone"]);

// // // obj["Marks"] = 98;
// // // // delete obj["hobby"];
// // // // console.log(obj);

// // // let arr = ["a", "b", "c", "d", "e"];
// // // let obj = {};
// // // for (let i = 0; i < arr.length; i++) {
// // //   let value = arr[i];
// // //   let key = i + 1;
// // //   obj[key] = value;
// // // }
// // // // console.log(obj);

// // // for (let keyset in obj) {
// // //   console.log(`${keyset} : ${obj[keyset]}`);
// // // }

// // let str = "masaischool";
// // let obj = {};
// // for (let i = 0; i < str.length; i++) {
// //   if (obj[str[i]]) {
// //     obj[str[i]]++;
// //   } else {
// //     obj[str[i]] = 1;
// //   }
// // }
// // console.log(obj);

// // let a = 10;
// // let b = 20;

// let calc = {
//   a: 1,
//   b: 2,
//   add: function (a, b) {
//     return a && b ? a + b : this.a + this.b;
//   },
// };

// console.log(calc.add(10, 20));
let str = "./home./images./img1";
let nstr = str.split("./").join("->");
console.log(nstr);
