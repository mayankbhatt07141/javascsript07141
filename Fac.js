function f(n) {
  let fac = 1;
  if (memo[n]) {
    console.log("memoed");
    return memo[n];
  }

  for (let i = 2; i <= n; i++) {
    fac += fac * i;
  }
  memo[n] = fac;
  return memo[n];
}
var memo = {};
console.log(f(5));
console.log(f(5));
