function Bubblesor(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
arr = [1, 5, 2, 0, 45, 07, 89];
console.log(arr);
Bubblesor(arr);
console.log(arr);
