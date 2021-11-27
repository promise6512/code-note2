const template = require('art-template')
const path = require('path')
const fs = require('fs')
//取出数据源模板
const modelList = require("../model/list")
const getController = (req,res) => {
  
  
  //获取模板文件渲染数据
  const html = template(path.join(__dirname, '../views/list-html.art'), {
    data: modelList.dataArray
  })
  //将渲染生成的数据写入public下的list.html文件
  //下次可直接通过"http://localhost:8080/index.html"访问静态资源
  fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

  res.send('pages has been compiled.')
}

module.exports = {
  getController
}