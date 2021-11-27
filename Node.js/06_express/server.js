const express = require("express");
const router = require("./router")

const app = express();
//It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())
//用于解析表单类型的request body
app.use(express.urlencoded({extended:false}))

//内置中间件:静态资源服务中间件
//The root argument('/public') specifies the root directory from which to serve static assets.
//it is relative to the directory from where you launch your node process
app.use(express.static('./public'))
app.use('/',router)

app.listen(8080,()=>{
  console.log("localhost:8080")
})


