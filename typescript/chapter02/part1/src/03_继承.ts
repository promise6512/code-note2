export default class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    show():void{
        console.log(this.name,this.age)
    }

    sayHello():void{
        console.log(`${this.name}在叫`)
    }
}

class Cat extends Animal{

}

class Dog extends Animal{
    constructor(name:string,age:number){
        super(name,age)
    }

    run():void{
        console.log(`${this.name}能跑`)
    }

    sayHello = ():void => {
        //override
        console.log(`${this.name}可以汪汪汪`)
    }

}
let dog1 = new Dog("旺财",18)
dog1.show()
console.log('a')
dog1.run()
dog1.sayHello();

let cat1 = new Cat("毛毛",20)
cat1.show()