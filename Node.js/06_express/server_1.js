const express = require("express");
const app = express()
/* 
  中间件栈:
    传入的多个中间件构成【中间件栈】
    上一个中间件中调用next(),下一个中间件才能会执行
      next可以理解为下一个中间件函数的引用
*/
//回调又被称为中间件(middleware)
/* app.use('/',(req,res,next)=>{
  console.log(1)
  //res.send("hello world")
  //调用next()后,下一个中间件函数才能执行
  next();
},(res,req,next)=>{
  console.log(2)
  next()
},(res,req)=>{
  console.log(3);
})
 */

//以数组的形式封装中间件栈
const middlewares = [
  (req,res,next)=>{
    console.log(1)
    //res.send("hello world")
    //调用next()后,下一个中间件函数才能执行
    next();
  },(res,req,next)=>{
    console.log(2)
    next()
  },(res,req,next)=>{
    console.log(3);
    next()  
  }
]

app.use("/",middlewares)

app.use('/api',(req,res)=>{
  res.send("world")
})

app.listen(8080,()=>{
  console.log("localhost:8008")
})