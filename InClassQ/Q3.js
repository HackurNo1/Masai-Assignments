function anagram(str, gtr) {
  let arr = new Array(128).fill(0);
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i)]++;
    arr[gtr.charCodeAt(i)]--;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      return false;
    }
  }
  return true;
}
console.log(anagram("l isttn", "si lent"));
