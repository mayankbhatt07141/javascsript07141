function person(yname) {
  this.yname = yname;
}
person.prototype.getname = function () {
  return this.yname;
};
let a = new person("maya");
console.log(a.getname());

// 2 way
let inher = Object.create(new person("mayank  bhatt"));
console.log(inher.getname());

// using clas

class person2 {
  constructor(fname) {
    this.fname = fname;
  }
  age = 25;
  getAge = function () {
    return this.age;
  };
}

class student extends person2 {
  constructor(fname) {
    super(fname);
  }
}

let mayank = new student("mayank");
console.log(mayank);
