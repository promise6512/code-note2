(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

    /*
    *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    *
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的属性都不能有实际的值
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的方法都是抽象方法
    *
    * */
    interface myInterface{
        name:string;
        age:number;
    }
    
    //可以重复定义同一个接口，多个相同接口会进行合并
    interface myInterface{
        gender:string,
        sayHello():void
        //sayHello(name:string):void
    }

    const obj:myInterface = {
        name:'222',
        age:12,
        gender:'male',
        /* sayHello(name:string){
            if(typeof name === 'string'){

            }else{

            }
        } */
        sayHello(){

        }
    }
    
    interface myInter{
        name: string;

        sayHello():void;
        sayHello(name:string):void
    }

    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */
    class MyClass implements myInter{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(){
            console.log('大家好~~');
        }
    }


   /* 
    可索引类型的接口 
    */
    interface StringArray {
        [index:number]:string
    }
    interface inter1 {
        [index:string]:string|number;
    }
    let arr:StringArray = ["Bob","Tom"];
    console.log(arr[0]);
    let obj1:inter1 = {
        a:'abc',
        b:2
    }
    let a = 'a'
  //  console.log(obj1[a])

    /* 
    接口继承
     */
    interface Shape {
        color: string;
    }
    
    interface PenStroke {
        penWidth: number;
    }
    
    interface Square extends Shape, PenStroke {
        sideLength: number;
    }
    
    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
   // square.a = 1
    console.log(square)
    class myClass implements Square{
        /* private */ color:string;  //不能声明为私有属性
        penWidth:number;
        sideLength:number;
        constructor(){
            this.color = "red";
            this.penWidth = 100;
            this.sideLength = 100;
        }
    }
})();