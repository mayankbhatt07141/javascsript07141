function Person(fname, lname) {
  let frname = fname;
  let laname = lname;
  this.getName = () => {
    return frname + " " + laname;
  };
}
let mayank = new Person("mayank", "bhatt");
console.log(mayank.getName());
