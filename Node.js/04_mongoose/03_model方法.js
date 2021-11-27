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
/* 
    Model.create(docs,[callback])
        用来创建一个或者多个文档并添加到数据库中
        参数:
            doc(s)可以是一个文档对象，也可以是一个文档对象的数组
            callback 
                当操作完成以后调用的回调函数

    查询的：
	 Model.find(conditions, [projection], [options], [callback])
	 	- 查询所有符合条件的文档 
        -会返回一个数组
	 Model.findById(id, [projection], [options], [callback])
	 	- 根据文档的id属性查询文档
	 Model.findOne([conditions], [projection], [options], [callback])
	 	- 查询符合条件的第一个文档 总和返回一个具体的文档对象

 		conditions 查询的条件
 		projection 投影 需要获取到的字段
 			- 两种方式
 				{name:1,_id:0}
 				"name -_id"
 		options  查询选项（skip limit）
 				{skip:3 , limit:1}
 		callback 回调函数，查询结果会通过回调函数返回
 					回调函数必须传，如果不传回调函数，压根不会查询
*/
/* StuModel.create([
    {
        name:'猪八戒',
        age:20,
        gender:'male',
        address:'高老庄'
    },
    {
        name:'沙和尚',
        age:19,
        gender:'male',
        address:'流沙河'

    }
],function(err){
    if(!err){
        console.log(arguments)
    }
}) */

/* StuModel.find({},{},{limit:3,skip:1},(err,docs)=>{
    console.log(docs)
}) */
/* StuModel.findOne({},(err,doc)=>{
    console.log(doc)
}) */
StuModel.findById('60f7ca95899821253c2722dc',(err,doc)=>{
    console.log(doc)
    //通过find()查询返回的对象 就是Document,文档对象
    //Document对象是Model的实例
    console.log(doc instanceof StuModel)
})