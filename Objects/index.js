// let myobject = new Object();
// myobject.name = "mayank";
// myobject.age = 24;

// console.log(myobject);

// let secondObj = {
//   name: "mayank bhatt",
//   age: 24,
// };

// console.log(secondObj);

// // convertigng obj to JSON

// let jsonf = JSON.stringify(myobject);
// console.log(jsonf);

// converting to Literal objects

// let literalobje = JSON.parse(jsonf);
// console.log(literalobje);

// let d = secondObj; //passign by reference
// d.name = "changed name";
// console.log(secondObj);

// let a = 5;
// let b = a; //pass by value
// b = 3;
// console.log(a);

// function fun(name, age) {
//   console.log(arguments);
// }

// fun("mayank", 24);

//Cerating a object
//usign the new keyword
// function obj(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
// let jon = new obj("jonn", "dae");
// console.log(jon);

// let arr = [1, 2, 3, 4];

dummydata = [
  {
    name: "John",
    id: 123,
    marks: [
      {
        physics: "60",
        maths: "55",
        hindi: "75",
        history: "55",
        geography: "66",
      },
    ],
  },
  {
    name: "Baba",
    id: 101,
    marks: [
      {
        physics: "30",
        maths: "15",
        hindi: "25",
        history: "45",
        geography: "16",
      },
    ],
  },
  {
    name: "yaga",
    id: 200,
    marks: [
      {
        physics: "20",
        maths: "35",
        hindi: "33",
        history: "25",
        geography: "06",
      },
    ],
  },
  {
    name: "Wick",
    id: 115,
    marks: [
      {
        physics: "60",
        maths: "45",
        hindi: "65",
        history: "85",
        geography: "66",
      },
    ],
  },
];

let studentNames = dummydata.map((value) => {
  return value.name;
});

console.log(studentNames); //the studentNames array contains the name of students.

let marks = dummydata.map((value) => {
  let sum =
    parseInt(value.marks[0].geography) +
    parseInt(value.marks[0].hindi) +
    parseInt(value.marks[0].history) +
    parseInt(value.marks[0].maths) +
    parseInt(value.marks[0].physics);
  return {
    name: value.name,
    totalmarks: sum,
  };
});

let totalMarksName = marks.map((value) => {
  return value.totalmarks;
});

console.log(totalMarksName);
let lessthan200 = marks
  .filter((value) => {
    return value.totalmarks < 200;
  })
  .map((value) => {
    return value.name;
  });

console.log(lessthan200);

let Namee = "BazzarIsfaraway";

// print the appearance of each alphabet using reduce method
// the expected output should be like this
// a:5
// z:2
console.log(Namee.split(""));
let app = Namee.split("").reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = ++acc[curr];
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(app);
