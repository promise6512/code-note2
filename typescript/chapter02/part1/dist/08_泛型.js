"use strict";
(function () {
    /*
       在定义函数或者类时，如果遇到类型不明确就可以使用泛型
           
    */
    function fn(a) {
        return a;
    }
    console.log(fn(10));
    console.log(fn("a111a"));
    //多个泛型
    function fn1(a, b) {
        return b;
    }
    console.log(fn1(1, 'abc'));
    // T extends Inter 表示泛型T必须时Inter实现类（子类）
    let fn3 = (a) => {
        return a.length;
    };
    console.log(fn3({ length: 3, color: "red" }));
    //类中的泛型
    class MyClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
    }
    const mc = new MyClass("hjp", 29);
    console.log(mc.getName());
})();
