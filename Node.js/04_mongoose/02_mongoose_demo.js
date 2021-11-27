//import mongoose from 'mongoose';
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',function(){
    console.log('数据库连接成功')
})
mongoose.connection.once('close',function(){
    console.log('数据库断开')
})

//创建Schema(模式)对象
const {Schema} = mongoose;
const stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})
//通过Schema来创建Model
//Model代表的是数据库的集合 通过Model才能对数据库进行 操作
/*
    mongoose.model(modelName,schema)
        modelName代表要映射的集合名  mongoose会自动将集合名变成负数
        stuSchema代表集合对应的Schema对象

*/
const StuModel = mongoose.model('students',stuSchema)

//向数据库中插入一个文档
//StuModel.create(doc,callback)
StuModel.create({
    name:'白骨精',
    age:18,
   // gender:'male',
    address:'洞里'
},function(err){
    if(!err){
        console.log('插入成功')
    }
})