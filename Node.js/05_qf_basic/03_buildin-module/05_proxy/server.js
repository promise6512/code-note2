const http = require("http");
const {createProxyMiddleware} = require("http-proxy-middleware");
const server = http.createServer((req,res)=>{
  const url = req.url;
  if(/^\/api/.test(url)){
    //配置代理,
    const proxy = createProxyMiddleware('/api',{
      target: 'https://passport.lagou.com',
      changeOrigin:true,
      //重写路径(^/api实际上作为一种标记,路径中带有此标记时,便会通过代理转发)
      pathRewrite:{
        '^/api': ''
      }
    });
    //向http://localhost:8080发送的请求会通过代理发送给https://passport.lagou.com
    proxy(req,res);
  }else{
    console.log('error');
  }
  res.end();
})
server.listen(8080,()=>{
  console.log("localhost:8080");
})