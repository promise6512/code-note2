const http = require("http");
const logger = require("../utils/log");
const url = require('url');
const server = http.createServer((req,res)=>{
  let urlStr = req.url;
  let urlObj = url.parse(urlStr,true);
  console.log(urlObj)
  console.log(urlObj.query)
  res.write(`${urlObj.query.cd}("hello")`)
  res.end();
})

server.listen(8080,()=>{
  console.log("localhost:8080")
})