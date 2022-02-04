// 0 1 1 2 3 5 8 13 21
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// let c = 0;
// for (let i = 0; i < 15; i++) {
//   c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

function fib(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }

  return (memo = fib(n - 1, memo) + fib(n - 2, memo));
}
for (let i = 0; i < 15; i++) console.log(fib(i));
