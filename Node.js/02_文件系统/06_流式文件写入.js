/* 
    同步、异步、简单文件的写入都不适合大文件
        性能较差 容易导致内存溢出
*/
// 
let fs = require('fs')
//创建一个可写流
/* 
    fs.createWriteStream(path[, options])
*/
let ws = fs.createWriteStream('creatWriteStream.txt');
                                                                         
//可以通过监听流的open和close事件来监听流的打开和关闭                                                                         
/*                                                                          
    obj.on(事件字符串,回调函数)                                                                         
        -可以为对象绑定一个事件                                                                         
     obj.once(事件字符串,回调函数)                                                                         
     -可以为对象绑定一个事件  该事件只会触发一次                                                                         
*/                                                                         
ws.once('open',function(){                                                                         
    console.log('流打开了')                                                                         
})                                                                         
                                                                         
ws.once('close',function(){                                                                         
    console.log('流关闭了')                                                                                                                       
})                                                                                                                       
                                                                                                                       
//通过ws向文件中输出内容                                                                                                                       
ws.write('通过可写流写入内容')                                                                                                                       
ws.write('通过可写流写入内容1')                                                                                                                       
ws.write('通过可写流写入内容2')                                                                                                                       
ws.write('通过可写流写入内容3')                                                                                                                       
                                                                                                                       
ws.end()                                                                                                                       