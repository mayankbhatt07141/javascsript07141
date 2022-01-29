function x(...arguments) {
  let add = 0;
  for (let i = 0; i < arguments.length; i++) {
    add += arguments[i];
  }
  return add;
}
console.log(x(5, 4, 1, 2, 3));

// Spread operator

let a = [1, 2, 3];
let b = [...a, 122, 123];
console.log(a);

let obj1 = {
  a: "m",
  b: "n",
};
let clone = { ...obj1, z: "k" };
console.log(clone);
console.log(x(...a));
