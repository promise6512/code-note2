//声明一个变量a 指定类型为number
let a: number;
let b:string;
a = 10;
b = 'hello';

//如果变量的声明和赋值同时进行，TS可以自动对变量进行类型检测
let c = false;
c = true;
//c = '1'

//函数参数类型声明和返回值的类型声明
function sum(a:number,b:number):number{
    return a + b;
}

console.log(sum(23,23))

