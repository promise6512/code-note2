/* 
    fs.readFile(path[, options], callback)
        path     路径
        options  
            encoding   默认值: null
            flag    请参阅对文件系统 flags 的支持。 默认值: 'r'.
            signal  允许中止正在进行的读取文件
    callback
        err  
        data  

    fs.readFileSync(path[, options])
*/
let fs = require('fs');
fs.readFile('an.png',function(err,data){
    if(!err){
        console.log(data)
        fs.writeFile('anWrite.gif',data,function(){})
    }
})