let myobject = new Object();
myobject.name = "mayank";
myobject.age = 24;

console.log(myobject);

let secondObj = {
  name: "mayank bhatt",
  age: 24,
};

console.log(secondObj);

// convertigng obj to JSON

let jsonf = JSON.stringify(myobject);
console.log(jsonf);

// converting to Literal objects

let literalobje = JSON.parse(jsonf);
console.log(literalobje);

let d = secondObj; //passign by reference
d.name = "changed name";
console.log(secondObj);

let a = 5;
let b = a; //pass by value
b = 3;
console.log(a);

function fun(name, age) {
  console.log(arguments);
}

fun("mayank", 24);
