"use strict";
(function () {
    const obj = {
        name: '222',
        age: 12,
        gender: 'male',
        /* sayHello(name:string){
            if(typeof name === 'string'){

            }else{

            }
        } */
        sayHello() {
        }
    };
    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好~~');
        }
    }
    let arr = ["Bob", "Tom"];
    console.log(arr[0]);
    let obj1 = {
        a: 'abc',
        b: 2
    };
    let a = 'a';
    let square = {};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
    // square.a = 1
    console.log(square);
    class myClass {
        constructor() {
            this.color = "red";
            this.penWidth = 100;
            this.sideLength = 100;
        }
    }
})();
