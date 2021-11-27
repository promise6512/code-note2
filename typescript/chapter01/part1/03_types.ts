//1.直接使用字面量进行类型声明
let a: 10;
//a = 11  -->变量a的值只能是10

//2.可以使用|联合多个类型
let b: "male"|"female"|11;
b = "male";
b = "female";
b = 11

let c: boolean|string;
c = true;
c = "hjp";

//3.any 表示的是任意类型,一个变量设置类型为any后 相当于对该变量关闭了TS的类型检测
// 声明变量如果不指定类型，则TS解释器会自动判断变量的类型为any(隐式any)
//一般不建议使用
let d:any;
d = 10;
d = "hello";
d = true;

//4.unkown表示未知类型的值
let e: unknown;
e = 10;
e = "hello"

//any和unknown的区别
let s: string;
s = d;
//s = e; 
//unknown实际上是一个类型安全的any；any类型的变量可以赋值给其他变量，而unknown类型不行
if(typeof e === "string"){
    s = e;
}

//类型断言,可以用来告诉解析器变量的实际类型
s = e as string;
s = <string> e;

//5.void用来表示空 用于函数时表示没有返回值的函数
function fn():void{
    console.log("void")
}

//6.never 表示永远不会有返回结果
function fn1():never{
    throw new Error("报错了!")
}
