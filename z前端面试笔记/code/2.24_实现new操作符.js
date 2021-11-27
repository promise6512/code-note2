function _new(constructor, ...rest) {
 // console.log(constructor)
  let obj = {};
  obj.__proto__ = constructor.prototype;
  constructor.apply(obj, rest);
  return obj;
}

function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.nation = "China"

let p = _new(Person, "zy", 20);
console.log(p)
console.log(p.nation)