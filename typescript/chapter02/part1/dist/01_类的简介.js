"use strict";
class Person {
    constructor() {
        //实例属性
        this.name = "孙悟空";
    }
}
//类属性(静态属性)
Person.age = 18;
const per = new Person();
console.log(per);
console.log(Person.age);
