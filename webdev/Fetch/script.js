// let prom = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Promise is resolved");
//   }
// });
// prom.then((message) => {
//   console.log(message);
// });
// let fetchedData = fetch("https://fakestoreapi.com/products");

// fetchedData.then((res) => res.json()).then((res) => console.log(res));

// async function fetchProduct() {
//   try {
//     let fetchedData = await fetch("https://fakestoreapi.com/products");
//     fetchedData = await fetchedData.json();
//     let filterData = fetchedData.filter((ele) => ele.price > 150);

//     console.log(filterData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchProduct();
