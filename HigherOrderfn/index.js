// Function that takes function as an argement or returns function from it is called higher order function
//Note: Functions are first class citizen in javascript
        // it means they can be treated like any other variable.
        //   1. assigned to variable
        //   2. passed as an argument
        //   3. returned from another function
        //   4. can add property to the function
                    function f(){
                       console.log("test")
                    }

                    f.test = "this was test" //added test property in the function
      
                    console.log(f.test) //this was test

    

let radius = [2, 5, 4, 7];


function area(radius) {
  return Math.PI * radius * radius;
}

function parameter(radius) {
  return 2 * Math.PI * radius;
}


function calculate(logic, arr) {
  //Higher order function
  output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  console.log(x);
  return output;
}


console.log(calculate(area, radius));
console.log(calculate(parameter, radius));

// here Calculate is higher order function as it takes function as an arguemnt

function mapPolly(logic){ 
        result = []
        console.log(this)
        for(let i=0;i<this.length; i++){
          result.push(logic(this[i]))
        }
        
        return result
}

let array = [1,2,3,4,5]

function multiplybytwo(item){
        return item*2;
}

Array.prototype.mapPolly = mapPolly;
let grater2 = array.mapPolly(multiplybytwo)

console.log(grater2)



function x() {
  let a = 5;
  return function () {
    console.log(a);
    return 3;
  };
}
let z = x();
console.log(z());



//MAP and Reduce example:

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
