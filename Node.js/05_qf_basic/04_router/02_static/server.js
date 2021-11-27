const http = require("http");
const path = require("path")
const readStaticFile = require("./readStaticFile")
const server = http.createServer((req,res)=>{
  let urlString = req.url;
  //resolve会拼接路径
  let filePathName = path.join(__dirname,'/public',urlString);
  const result = readStaticFile(filePathName)
  const {data,mimeType} = result || {};
 // console.log(result)
  if(data&&mimeType){
    res.writeHead(200,{
      'content-type':`${mimeType};charset=utf-8`
    })
    res.write(data);
  }else{
    res.write("page not found")
  }
 // console.log(mimeType)
 // res.write(data)
  res.end()
})

server.listen(8080,()=>{
  console.log("localhost:8080")
})