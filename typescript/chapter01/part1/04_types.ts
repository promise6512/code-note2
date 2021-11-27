//1.object表示一个js对象
let a : object;
a = {};
//函数也是对象
a = () => {

}

/* 
    2.{}用来指定对象中可以包含哪些属性
        可以在属性后面加"?" 表示该属性可有可无
*/
let b: {name:string,age:number,address?:string}; 
b = {
    name:"孙悟空",
    age:18
}

//以下声明表示c的类型为对象，c中必须由name属性 其他的属性可以任意
let c: {name:string,[propName:string]:any}
c = {name:"猪八戒",age:20,address:"高老庄"}


/*
*   3.设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let d: (a:number, b:number) => number;
d = function(a:number,b:number){
    return a + b;
}

/*
*   4.数组的类型声明：
*       类型[]
*       Array<类型>
* */
let f: number[];
f = [1,2,3]
let g: Array<string>;
g = ["1","2","3"];

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
let h: [string,string,number];
h = ["2","3",1];

/*
* enum 枚举
*
* */
enum Gender{
    male,
    female
}
let i : {
    name:string,
    gender:Gender
}

i = {name:"孙悟空",gender:Gender.male}
console.log(i.gender === Gender.male)
console.log(i.gender === 0)

//&表示同时，可以连接对象
let j : {name:string} & {age:number} & {address:string}
j = {name:"孙悟空",age:17,address:"花果山"}

//类型别名
type myType = string;
type myType1 = 1|2|3|4|5
let k : myType;
let l : myType1;