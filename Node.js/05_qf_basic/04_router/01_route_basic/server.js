const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
  const urlString = req.url;
  switch (urlString) {
    case "/":
      res.end('hello');
      break
    case "/home":
      fs.readFile('./home.html', (err, data) => {
        if (err) {
          throw err
        }
        //读取页面数据并返回
        res.write(data);
        res.end()
      })
      break;
    case "/app.js":
      fs.readFile('./app.js', (err, data) => {
        if (err) {
          throw err
        }
        res.end(data);
      })
      break;
    case "/wedding.jpg":
      fs.readFile('./wedding.jpg', (err, data) => {
        if (err) {
          throw err
        }
        res.end(data);
      })
      break;
  }
  //res.end();
})

server.listen(8080, () => {
  console.log("localhost:8080")
})