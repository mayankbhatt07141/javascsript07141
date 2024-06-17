
//Hoisting
    // Hoisting is a concept which enables us to extract values of variables and functions even before 
    // initialising/assigning value without getting error 
    // and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

getName(); // we can call/execute this function even before initilization 
console.log(getName) // it prints the whole function becuase of memory creation phase
console.log(x) // unidefined is printed(becuase of memory creation phase), no error, accessing the variable before declaration 

var x = 5;

function getName(){
    console.log("Mayank Bhatt")
    return "Mayank bhatt"
}



getName2(); // Uncaught TypeError: getName is not a function
// because we are storing the function in the getName2 variable, and memory creating phase the getName2 is variable
//and having undifined value not treated as function.
console.log(getName2) // not executed
var getName2 = function(){
    console.log("Mayank Bhatt")
    return "Mayank bhatt"
}
// The code won't execute as the first line itself throws an TypeError.
