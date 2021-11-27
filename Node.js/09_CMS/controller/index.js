var template = require('art-template')
var path = require('path')
var fs = require('fs')
const getController = (req,res) => {
  let dataArray = [];

  for(let i = 0;i < 100;i++){
    dataArray.push(i);
  }
  
  //获取模板文件渲染数据
  var html = template(path.join(__dirname, '../views/list-html.art'), {
    data: dataArray
  })
  //将渲染生成的数据写入public下的list.html文件
  //下次可直接通过"http://localhost:8080/index.html"访问静态资源
  fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

  res.send('pages has been compiled.')
}

module.exports = {
  getController
}