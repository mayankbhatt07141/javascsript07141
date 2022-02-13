let str = "mayank bhatt";
let arr = str.split("");
let x = arr.reduce((acc, curr) => {
  if (curr != " ") {
    if (acc[curr]) {
      acc[curr] = ++acc[curr];
    } else {
      acc[curr] = 1;
    }
  }
  return acc;
}, {});

console.log(x);
