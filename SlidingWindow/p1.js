let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
let maxSum = 0;
let localSum = 0;
for (let i = 0; i <= n - 3; i++) {
  localSum = 0;
  for (let j = i; j < i + 3; j++) {
    console.log(j);
    localSum += arr[j];
  }
  if (localSum > maxSum) {
    maxSum = localSum;
  }
}
console.log(maxSum);
