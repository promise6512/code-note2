class Dog{
    //属性定义
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

    show():void{
        console.log(this,this.name,this.age);
    }
}
const dog = new Dog("旺财",18);
dog.show()