const http = require("http");
const https = require("https");
 
function filterData(data){
  console.log(data);
}

const server = http.createServer((req,res)=>{
  let data = '';
  https.get('https://www.meizu.com',result=>{
    result.on('data',chunk=>{
      data += chunk;
    })
    
    result.on('end',()=>{
      filterData(data)
    })
  })

  res.end();
})
server.listen(8080,()=>{
  console.log("localhost:8080");
})