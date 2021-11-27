const http = require("http");
const server = http.createServer((req,res)=>{
  res.writeHead(200,{
    'content-type': 'test/html'
  })
  res.write("<div> hello </div>")
  res.end();
})
server.listen(8080,()=>{
  console.log("localhost:8080");
})