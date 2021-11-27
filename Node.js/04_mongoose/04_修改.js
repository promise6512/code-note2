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
const StuModel = mongoose.model('students',stuSchema)
/*
	修改
        Model.update(conditions, doc, [options], [callback])   ！！！已弃用
        Model.updateMany(conditions, doc, [options], [callback])
        Model.updateOne(conditions, doc, [options], [callback])
        	- 用来修改一个或多个文档
        	- 参数：
        		conditions 查询条件
        		doc 修改后的对象
        		options 配置参数
        		callback 回调函数
        Model.replaceOne(conditions, doc, [options], [callback])
*/
//修改孙悟空的年龄为28
/* StuModel.updateOne({name:'孙悟空'},{$set:{age:20}},(err)=>{
    if(!err){
        console.log('successfully update')
    }
}) */
/* StuModel.updateOne({name:'孙悟空'},{age:28},(err)=>{ //省略$set也能达到同样的效果
    if(!err){
        console.log('successfully update')
    }
}) */

StuModel.updateMany({name:'沙和尚'},{age:48},(err)=>{ //省略$set也能达到同样的效果
    if(!err){
        console.log('successfully update')
    }
})
/*
	删除：
        Model.remove(conditions, [callback])     !!!已被弃用
        Model.deleteOne(conditions, [callback])
        Model.deleteMany(conditions, [callback])
*/
/* StuModel.remove({name:'白骨精'},(err)=>{ //省略$set也能达到同样的效果
    if(!err){
        console.log('successfully delete')
    }
}) */
/* StuModel.deleteOne({name:'猪八戒'},(err)=>{ //省略$set也能达到同样的效果
    if(!err){
        console.log('successfully delete')
    }
}) */
StuModel.count({},function (err , count) {
	if(!err){
		console.log(count);
	}
});