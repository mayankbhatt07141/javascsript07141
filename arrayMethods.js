let arr = [1, 2, 3, 5, 6, 7, 8, 2];
let slicedArr = arr.slice(1, 2);

//SLICE takes two arguments (start,end) (end is exclusive) .
//it return selected elements array.
console.log(arr);

//SPLICE method adds and removes the array elements. it overrides the orginal array

let splicedarray = arr.splice(2, 1, 15);
console.log(arr);
console.log(splicedarray);
