const getController = (req,res) => {
  /* let dataObj = {
    ret:true,
    data:[]
  }
  for(let i = 0;i < 100;i++){
    dataObj.data.push("line"+i)
  } */
 // console.log(1)
  
  let dataArray = [];

  for(let i = 0;i < 100;i++){
    dataArray.push(i);
  }
  res.set("Content-Type","application/json; charset=utf-8")
  //安装插件【express-art-template】后可使用art-template方法
  //render第一个参数用来指定模板(只需要写文件名,不用加上路径和拓展名),即list.art文件
  //render第二个参数是要传递给模板的数据
  //console.log(dataArray)
  //console.log(JSON.stringify(dataArray))
  res.render('list',{
    dataArray:dataArray
  })
  //res.send(dataObj)
}

module.exports = {
  getController
}