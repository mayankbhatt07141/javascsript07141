let P1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise1");
  }, 2000);
});

let P2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("promise2");
  }, 0);
});

let P3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise3");
  }, 2000);
});

Promise.allSettled([P1, P2, P3]).then((value) => {
  console.log(value);
});
