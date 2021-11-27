/* 
   1.mongoose概念:
       Mongoose是一个对象文档模型（ODM）库
       Object Document Model
    2.下载安装mongoose
        npm i mongoose --save
    3.引入mongoose
        var mongoose require('mongoose')
    4.连接mongoDB数据库
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
                                    数据库IP地址:端口号
        如果端口号时默认端口号(27017) 则可以省略不写
        一般情况下 只需要连接一次 连接一次以后除非项目停止服务器关闭 否则连接一般不断开

    5.监听MongoDB数据库的连接状态
        在mongoose对象中 有一个属性叫connection 该对象表示的就是数据库的连接
            通过监视该对象的状态 可以监听数据库的连接与断开
        
        数据库连接成功的事件
        mongoose.connection.once('open',callback)

        数据库断开的事件
        mongoose.connection.once('close',callback)

    6.断开数据库的连接
       mongoose.disconnect() 
*/ 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',function(){
    console.log('数据库连接成功')
})
mongoose.connection.once('close',function(){
    console.log('数据库断开')
})
//mongoose.disconnect() 