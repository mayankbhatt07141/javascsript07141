//call method is used to invoke a function immediately with "this" value

function persons(g1, g2) {
  console.log(g1 + this.fname);
  console.log(g2 + this.age);
}

let obj = {
  fname: "mayank",
  age: 23,
};
persons.call(obj, "hy", "hello");

//apply
//same as call but arguments are passed as an array

persons.apply(obj, ["hy", "hello"]);
console.log(Math.max.apply(null, [78, 2, 3, 4]));

//BIND
//bind method returns an function and can pass any number of arguments

let binded = persons.bind(obj);
console.log(binded("hy", "hello"));
