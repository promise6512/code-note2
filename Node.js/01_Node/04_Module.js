/* 
    在node中有一个全局对象 global 它的作用和网页中的window类似
        全局中创建的变量都会作为global的属性保存
        全局中创建的函数都会作为global的方法保存
*/

a = 10;
console.log(global.a)
console.log(arguments)

/* 
    arguments.callee
        -这个属性保存当前执行的函数对象

*/
console.log(arguments.callee+'')


/* 
   当node在执行模块中的代码时 它会首先在代码的最顶部 添加如下代码
   function (exports, require, module, __filename, __dirname) {

   在代码的底部添加如下
    }

    即将文件中的所有代码封装到函数中，并且在函数执行时传递了五个实参

    exports
        -该对象用来将变量或函数暴露到外部

    require
        -函数 用来引入外部的模块

    module
        -代表模块的本身
        -exports其实就是模块的属性
        既可以使用exports导出  也可以使用module.exports导出

     __filename
        -当前模块的完整路径

    __dirname
        -当前模块所在文件夹的路径
*/
console.log(__filename)