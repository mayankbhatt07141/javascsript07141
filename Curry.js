//with the help of curring we can transform the function arguments into a nexted dunction calls

function multiply(x) {
  return (y) => {
    console.log(x * y);
  };
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

//we can implement curry by using two methods 1.closures 2.bind

function Add(x, y) {
  console.log(x + y);
}

let AddbyTwo = Add.bind(this, 2);
AddbyTwo(4);
