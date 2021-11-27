const express = require("express");
const {postController} = require("../controller")
const {getController} = require("../controller")
//路由中间件
const router = express.Router();

router.get('/',(req,res)=>{
  res.send("home page")
})

router.get('/index',(req,res,next)=>{
  //res.send("<div>hello index</div>")
 // res.send("console.log(11)")
  /* 
    req.query可获取查询参数
      console.log(req.query instanceof Object) --> true
      res.send(req.query)可以向前端返回JSON类型的数据
  */
  const {query} = req;
  console.log(query)
  res.json(query)
  //next()
})

//抽离Controller(控制层)
router.post('/index',postController)

router.put('/index',(req,res)=>{
  const {body} = req;
  console.log(body)
  res.send(body)
})

//客户端渲染举例
router.get('/api/list',getController)
//router.all() 可以接收所有方法的请求
module.exports = router

