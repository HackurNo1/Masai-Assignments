function func() {
  setTimeout(() => console.log(`Hello,${this.name}`), 3000);
}
let obj = {
  name: "Yash",
};
func.call(obj);
