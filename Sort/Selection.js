let arr = [1, 2, 5, 0, 155, 56, 11, 45, 500, 8, 98];
let n = arr.length;
for (let i = 0; i < n; i++) {
  let min = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }

  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}
console.log(arr);
