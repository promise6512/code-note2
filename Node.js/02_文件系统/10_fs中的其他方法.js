let fs = require('fs');

/* 检查文件是否存在 */
let isExists = fs.existsSync('an.png');
console.log(isExists)

/* 
    fs.stat(path, callback)
    fs.statSync(path)
        -获取文件的状态
        -它会给我们返回一个对象 这个对象中保存了当前对象状态的相关信息

*/
fs.stat('an.png',function(err,stat){
    console.log(stat)
})

/* 
    fs.unlink(path,callback)
    fs.unlinkSync(path)
        删除文件
*/
//fs.unlinkSync('hello.txt')

/* 
    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])
        读取目录
        files 是目录中文件名的数组
           
*/
fs.readdir('.',function(err, files){
    console.log(files)
})

/* 
   – fs.truncate(path, len, callback)
   – fs.truncateSync(path, len)
        截断文件
*/
/* 
   – fs.mkdir(path[, mode], callback)
   – fs.mkdirSync(path[, mode])
        删除目录
*/
/* 
    – fs.rmdir(path, callback)
    – fs.rmdirSync(path)

*/