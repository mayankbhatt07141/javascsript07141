function getData() {
  console.log("batman");
}
function callAPi(fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}

let searchfn = callAPi(getData, 300);
