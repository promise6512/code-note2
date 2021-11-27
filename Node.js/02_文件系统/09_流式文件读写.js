/* 
    流式文件读取也适用于一些较大的文件 可以多次将文件读取到内存中
*/
let fs = require('fs');

let ws = fs.createWriteStream('mirror4.mp4')

//创建一个可读流

let rs = fs.createReadStream('2号.mp4');

listenOc(rs,'可读流',function(){
    ws.end()
})

listenOc(ws,'可写流')

//pipe()可以将可读流的内容 直接输出到可写流中
rs.pipe(ws)


//创建一个用于绑定事件监听的函数
function listenOc(obj,string,callback){
    obj.once('open',function(){
        console.log(string+'打开')
        
    })
    
    obj.once('close',function(){
        console.log(string+'关闭')
        callback&&callback()
    })
}