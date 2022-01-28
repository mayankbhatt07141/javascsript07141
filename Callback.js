function x() {
  console.log("called");
}

function y(x) {
  console.log("batman");
  x();
}

y(x);
