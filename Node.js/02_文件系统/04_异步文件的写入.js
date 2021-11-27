/* 
    异步文件操作
        1.打开文件
            fs.open(path[, flags[, mode]], callback)
            本身没有返回值 结果通过回调函数返回
            回调函数的参数
                err  错误对象 如果没有错误则为null
                fd   文件的描述符
        2.写入内容
            fs.write(fd, string[, position[, encoding]], callback)
        3.关闭文件
            fs.close(fd[, callback])

*/

let fs = require('fs');
fs.open('hello6.txt','w',function(err,fd){
    if(!err){                //判断是否出错
        fs.write(fd,'123',function(err){
            if(!err){
                console.log('写入成功')
            }

            //关闭文件
            fs.close(fd,function(err){
                if(!err){
                    console.log('文件已关闭')
                }
            })
        })
    }else{
        console.log(err)
    }   
})

console.log('程序向下执行')