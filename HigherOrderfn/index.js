// let radius = [2, 5, 4, 7];
// //higher order function

// function calculate(logic, arr) {
//   //Higher order function
//   output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]));
//   }
//   console.log(x);
//   return output;
// }
// function area(radius) {
//   return Math.PI * radius * radius;
// }
// function parameter(radius) {
//   return 2 * Math.PI * radius;
// }

// console.log(calculate(area, radius));
// console.log(calculate(parameter, radius));

function x() {
  let a = 5;
  return function () {
    console.log(a);
    return 3;
  };
}
let z = x();
console.log(z());

//Map

const users = [
  { firstname: "mayank", lastname: "bhatt", age: 26 },
  { firstname: "donald", lastname: "bhatt", age: 26 },
  { firstname: "mayank", lastname: "bhatt", age: 15 },
  { firstname: "mayank", lastname: "bhatt", age: 56 },
];
let fullname = users.map((value) => {
  return value.firstname + value.lastname;
});
console.log(fullname);

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);

let out = users.reduce((acc, curr) => {
  if (curr.age === 26) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);

console.log(out);
