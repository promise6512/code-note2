/* 
    文件系统(File System)
        通过node来操作系统中的文件
        使用文件系统 需要先引入fs模块 fs是核心模块 直接引入不需要下载
*/
var fs = require('fs')
//console.log(fs)

/* 
    同步文件的写入
        1.打开文件
            fs.openSync(path,flags[mode])
                -path  要打开文件的路径
                -flags 打开文件要做的操作的类型
                    r 只读
                    w 可写的
                -mode 设置文件的操作权限 一般没用
                该方法会返回一个文件的描述符作为结果 我们可以通过描述符来对文件进行各种操作
        2.向文件中写入内容
            fs.writeSync(fd, string[, position[, encoding]])
                -fd文件描述符
                -string 要写入的内容
                -position 传入一个整数 表示写入的起始位置
                - encoding 写入的编码 默认utf-8
        3.关闭文件
            fs.close(fd)
*/
var fd = fs.openSync("./Node.js/02_文件系统/hello5.txt",'w')  //相对路径 打开当前目录下的hello.txt
//console.log(fd)
/* let buf = Buffer.from('123你好')
console.log(buf)
fs.writeSync(fd,buf) */
fs.writeSync(fd , '今天天气真2不错',20);
fs.closeSync(fd)

