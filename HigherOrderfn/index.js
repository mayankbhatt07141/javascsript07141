let radius = [2, 5, 4, 7];
//higher order function

function calculate(logic, arr) {
  //Higher order function
  output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  console.log(x);
  return output;
}
function area(radius) {
  return Math.PI * radius * radius;
}
function parameter(radius) {
  return 2 * Math.PI * radius;
}

console.log(calculate(area, radius));
console.log(calculate(parameter, radius));
