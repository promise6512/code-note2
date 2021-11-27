const path = require('path');
const fs = require('fs');
const mime = require("mime");
function myReadFile(filePathName){
  /* let data;
  fs.readFile(filePathName,(err,content)=>{
    if(err){
      data =  "你访问的是一个文件夹,且文件夹中不存在index.html"
    }else{
      console.log(data,"22")
      data = content
    }
  }) */
  let data = fs.readFileSync(filePathName);
  return data;
}

function readStaticFile(filePathName){
  console.log(filePathName)
  let data 
  let mimeType
  //如果存在文件或文件夹
  if(fs.existsSync(filePathName)){
    
    let {ext} = path.parse(filePathName);
   // console.log(ext)
    //data用于接收文件数据
    
    //如果是文件
    if(ext){
      mimeType = mime.getType(ext);
      data = myReadFile(filePathName);
     // console.log(data)
    }else{
      mimeType = mime.getType("html");
      data = myReadFile(path.join(filePathName,"/index.html"))
    }
  }
  //console.log(data)
  return {
    data,
    mimeType
  }
}
//readStaticFile('C:\\Users\\86198\\Desktop\\code\\Node.js\\05_qf_basic\\04_router\\02_static\\public\\index.html')
module.exports = readStaticFile;