const http = require("http");
http.get("http://nodejs.cn/learn/the-nodejs-http-module",(res)=>{
  let str = "";
  res.on("data",(chunk)=>{
    str += chunk
  })
  res.on("end",()=>{
    console.log(str)
  })
});