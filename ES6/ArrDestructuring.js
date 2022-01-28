//Array Destructing
// Assigning values of array in variables

let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;

// console.log(e);

//Object Destructring.
let obj = {
  myname: "mayank",
  classname: "first",
  age: 25,
};

let { myname, classname, age } = obj;
console.log(myname, classname);
