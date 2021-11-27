"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this, this.name, this.age);
    }
}
const dog = new Dog("旺财", 18);
dog.show();
