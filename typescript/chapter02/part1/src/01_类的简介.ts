class Person{

    //实例属性
    name:string = "孙悟空";
    
    //类属性(静态属性)
    static age:number = 18
}

const per = new Person();
console.log(per);
console.log(Person.age)

