/* 
    Doucument 和 集合的文档一一对应
       通过Model查询到的结果都是Document
*/
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
//创建一个document
const stu = new StuModel({
    name:'奔波霸',
    age:48,
    gender:'男',
    address:'碧波潭'
})
/*
	document的方法
 		document.save([options], [callback])
        document.update([options],[callback])
		 	修改对象
		document.remove([callback])
		    删除对象
*/
/* stu.save(err=>{
    if(!err){
        console.log('successfully save')
    }
})
 */
StuModel.findOne({},(err,doc)=>{
    if(!err){
       /*  console.log(doc)
        doc.update({age:10086},err=>{
            if(!err)
            console.log('successfully update')
        }) */
        doc.age = 100
       // doc.save()
        const obj = doc.toObject()
        delete obj.age
        console.log(obj)
        
    }
})


/*
	get(name)
		- 获取文档中的指定属性值
	set(name , value)
		- 设置文档的指定的属性值
	id
		- 获取文档的_id属性值
    toJSON()
    	- 转换为一个JSON对象
    toObject()
    	- 将Document对象转换为一个普通的JS对象
	 		转换为普通的js对象以后，注意所有的Document对象的方法或属性都不能使用了
*/