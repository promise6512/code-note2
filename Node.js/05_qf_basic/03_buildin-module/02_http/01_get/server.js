/* 
  在浏览器端调试nodejs
  步骤:
      1.命令行窗口输入命令:node --inspect --inspect-brk server.js
      2.打开Chrome,跳转网址:chrome://inspect/#devices
      3.打开控制台点击左上角node图标,跳转到"DevTools-Nodejs"页面
      4.在"DevTools-Nodejs"页面中点击Connection,添加端口监听
      5.进入Sources即可进行debug
*/
/* 
  node进程管理工具
    
*/
const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "debug" } }
});
const logger = require("log4js").getLogger("cheese");
const http = require("http");
const https = require("https")
const querystring = require('querystring')
const server = http.createServer((request, response) => {
  //const url = request.url;
  // logger.debug(url)
  /*  let data = '';
   response.on('data', (chunk) => {
     data += chunk;
   })
 
   request.on('end', () => {
     //写入响应首部
     response.writeHead(200, {
       'content-type': 'application/json;charset=utf-8'
     })
     logger.debug(data);
     //写入响应体
     response.write(JSON.stringify(querystring.parse(data)));
     response.end();
   }) */
  https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', (result) => {
    let data = '';
    result.on('data', chunk => {
      data += chunk;
    })

    result.on('end', () => {
      response.writeHead(200, {
        'content-type': 'application/json;charset=utf-8'
      })

      //写入响应体
      response.write(data);
      response.end();
    })
  })




})

server.listen(8080, () => {
  console.log("localhost:8080")
})