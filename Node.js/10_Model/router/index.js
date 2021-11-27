const express = require("express");
const {getController} = require("../controller")
//路由中间件
const router = express.Router();
//客户端渲染举例
router.get('/api/list',getController)
//router.all() 可以接收所有方法的请求
module.exports = router

