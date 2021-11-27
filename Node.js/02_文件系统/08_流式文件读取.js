/* 
    流式文件读取也适用于一些较大的文件 可以多次将文件读取到内存中
*/
let fs = require('fs');

//创建一个可读流

let rs = fs.createReadStream('2号.mp4');

rs.once('open',function(){
    console.log('可读流打开了');
})

rs.once('close',function(){
    console.log('可读流关闭')
    ws.end()

})

let ws = fs.createWriteStream('mirror2.mp4')

ws.once('open',function(){
    console.log('可写流关闭')
})

//如果要读取一个可读流中的数据 必须要为可读流绑定一个data事件 data事件绑定完毕 它会自动开始读取数据
rs.on('data',function(data){   //data参数用于接收读取到的数据
    //console.log(data)
   // let ws = fs.createWriteStream('mirror2.mp4')
    ws.write(data);
   
})