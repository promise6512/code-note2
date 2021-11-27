(function () {

    /*
    *   以abstract开头的类是抽象类，
    *       抽象类和其他类区别不大，只是不能用来创建对象
    *       抽象类就是专门用来被继承的类
    *
    *       抽象类中可以添加抽象方法
    * */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        // 定义一个抽象方法
        // 抽象方法使用 abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello():void;
    }

    class Dog extends Animal{
        sayHello() {
            console.log('汪汪汪汪！');
        }

        
    }

    class Cat extends Animal{
        sayHello() {
            console.log('喵喵喵喵！');
        }
       
        //run:(distance:number) => void;
        //方法重载
        run(distance:number|string):void|string{
            if(typeof distance === 'number'){
                console.log(`${this.name} run ${distance} miles`)
            }else if(typeof distance === 'string'){
                console.log("please input a number")
                return "1"
            }
        }
    }

    const dog = new Dog('旺财');
    dog.sayHello();
    const cat = new Cat("猫");
    cat.sayHello()
    cat.run('1')
})();