let obj1 = {
  name: "mayank",
  lastname: "bhatt",
};
let obj2 = {
  phone: "9568716833",
};

obj1.__proto__ = obj2;
console.log(obj1.phone);
//by usign object 1 we can use obj2 , because we modified the proto of obj2
