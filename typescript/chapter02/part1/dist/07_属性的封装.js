"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
            this._address = "杭州";
        }
        /* getName():string{
            return this.name;
        }
        setName(name:string):void{
            this.name = name;
        }
        getAge():number{
            return this.age;
        }
        setAge(age:number):void{
            if(age > 0){
                this.age = age;
            }
        } */
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    class Student extends Person {
        test() {
            //console.log(this._name) _name是私有属性,不能在子类中访问
            console.log(this._address); //_address是protected，可以在子类中访问,但是不能在外部访问
        }
    }
    const per = new Person("孙悟空", 28);
    //per.name = '猪八戒'  -->只能在类中访问
    /*  per.setName('猪八戒')
     console.log(per.getName())
     per.setAge(-1);
     console.log(per.getAge()) */
    per.name = "猪八戒";
    console.log(per.name);
    const stu = new Student("zy", 20);
    // console.log(stu._address)
    //简化写法
    class A {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            //赋值自动完成
        }
    }
    const a = new A("xxx", 18);
    console.log(a);
})();
