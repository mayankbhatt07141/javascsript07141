// Hoisting is a concept which enables us to extract values of variables 
// and functions even before initialising/assigning value without getting error and 
// this is happening due to the 1st phase (memory creation phase) of the Execution Context.

getName(); // Namaste Javascript

console.log(x); // undefined

var x = 7;
function getName() {
  console.log("Namaste Javascript");
}


// example-2
getName2(); // Uncaught TypeError: getName is not a function
console.log(getName2);
var getName2 = function () {
  console.log("Namaste JavaScript");
};
// The code won't execute as the first line itself throws an TypeError.


// NOTE

// Shortest js program: empty file (GEC is created which has memory space)


