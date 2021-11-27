/* 
  定义模块 用来连接MongoDB数据库
*/
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',function(){
    console.log('数据库连接成功')
})