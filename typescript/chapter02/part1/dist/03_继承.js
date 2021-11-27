export default class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }
    sayHello() {
        console.log(`${this.name}在叫`);
    }
}
class Cat extends Animal {
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
        this.sayHello = () => {
            //override
            console.log(`${this.name}可以汪汪汪`);
        };
    }
    run() {
        console.log(`${this.name}能跑`);
    }
}
let dog1 = new Dog("旺财", 18);
dog1.show();
console.log('a');
dog1.run();
dog1.sayHello();
let cat1 = new Cat("毛毛", 20);
cat1.show();
