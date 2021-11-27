/* 
   模块化  
       -在Node中一个js文件就是一个模块
       -在Node中 每一个js文件中的js代码都是独立运行在一个函数中
                 而不是全局作用域
       在node中通过require()函数引入外部模块
             require()可以传递一个文件的路径作为参数 node将会自动根据该路径来引入外部模块
       使用require()引入模块以后 该函数会返回一个对象 这个对象代表的是引入的模块
    
*/
/* 
   我们使用require()引入外部模块时 使用的就是模块标识  我们可以通过模块标识来找到指定的模块
       模块分为两大类
            -核心模块
                -由node引擎提供的模块
                -核心模块的标识就是 模块的名字
            -文件模块
                -用户自己创建的模块
                -文件模块的标识就是文件的路径(绝对路径 相对路径)
  
*/
let md = require('./02_helloNode')
//console.log(md)

let math = require('./math');
//console.log(math.add(1,2))

let fs = require('fs')
console.log(fs)