//1.object表示一个js对象
var a;
a = {};
//函数也是对象
a = function () {
};
/*
    2.{}用来指定对象中可以包含哪些属性
        可以在属性后面加"?" 表示该属性可有可无
*/
var b;
b = {
    name: "孙悟空",
    age: 18
};
//以下声明表示c的类型为对象，c中必须由name属性 其他的属性可以任意
var c;
c = { name: "猪八戒", age: 20, address: "高老庄" };
/*
*   3.设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
var d;
d = function (a, b) {
    return a + b;
};
/*
*   4.数组的类型声明：
*       类型[]
*       Array<类型>
* */
var f;
f = [1, 2, 3];
var g;
g = ["1", "2", "3"];
/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
var h;
h = ["2", "3", 1];
/*
* enum 枚举
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = { name: "孙悟空", gender: Gender.male };
console.log(i.gender === Gender.male);
console.log(i.gender === 0);
