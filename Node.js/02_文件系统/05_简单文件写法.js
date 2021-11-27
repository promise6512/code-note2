/* 
    简单文件写入
        fs.writeFile(file, data[, options], callback)
        fs.writeFileSync(file, data[, options])
        参数:
            file  要操作文件的路径
            data  要写入的数据
            option  对写入进行设置
            callback 当写入完成以后执行的函数

*/
let fs = require('fs');
fs.writeFile('simpleWrite.txt','欢迎来到异步文件读写',{flag:"a"},function(err){
    if(!err){                                       //flag设置为r  可以设置权限
        console.log('写入成功')
    }else{
        console.log('权限不够')
    }
})

fs.writeFileSync('simpleWriteSync.txt','欢迎来到同步读写文件')

//向桌面的文件写入内容
fs.writeFile('C:\\Users\\lenovo\\Desktop\\desk_hello.txt','就算你在桌面我也可以向你写东西',{flag:'a'},function(){
            //路径也可以写为'C:\\Users\\lenovo\\Desktop\\desk_hello.txt'
})

/* 
模式 说明
r 读取文件 , 文件不存在则出现异常
r+ 读写文件 , 文件不存在则出现异常
rs 在同步模式下打开文件用于读取
rs+ 在同步模式下打开文件用于读写
w 打开文件用于写操作 , 如果不存在则创建，如果存在则截断
wx 打开文件用于写操作, 如果存在则打开失败
w+ 打开文件用于读写, 如果不存在则创建, 如果存在则截断
wx+ 打开文件用于读写, 如果存在则打开失败
a 打开文件用于追加, 如果不存在则创建
ax 打开文件用于追加, 如果路径存在则失败
a+ 打开文件进行读取和追加, 如果不存在则创建该文件
ax+ 打开文件进行读取和追加,如果路径存在则失败 
*/

