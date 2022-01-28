class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let mycar1 = new car("ford", 2016);
console.log(mycar1.name + " " + mycar1.year);
console.log(typeof car);
let a = 10;
console.log(a);
delete a;
console.log(a);
