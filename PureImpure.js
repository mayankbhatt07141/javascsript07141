//when we pass same agrument it will returns same output it is pure function

function add(x, y) {
  return x + y;
}
console.log(add(2, 5));
//pure fn are predictiable and does not depends on outer variable and apis

//impure fun are not predictiable when passess same arguments it results different results

function addRan(x, y) {
  let ran = parseInt(Math.random() * 10);
  return x + y + ran;
}
console.log(addRan(2, 5));
