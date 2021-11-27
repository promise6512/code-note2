# 配置脚本
```
{
  "name": "02_tools",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  //通过npm run dev/ npm run greeting等命令可以运行相应脚本
  "scripts": {
    "dev": "gulp -v",
    "greeting": "echo hello",
    //使用&/&&可以一次运行多个脚本 
    //&为并行运行脚本(无先后顺序)
    //&&为串行运行脚本(有先后顺序)
    "runjs": "node ./02_scripts/script1.js & node ./02_scripts/script2.js",
    "start": "node ./02_scripts/script1.js"
    //cross-env使该命令具有跨平台(windows/mac)功能,使用npm install cross-env -D
    //在prod.js脚本文件中process.env.NODE_ENV的值为"production"
    "prod": "cross-env NODE_ENV=production node ./02_scripts/prod.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.6.0",
    "underscore": "^1.13.1"
  },
  "devDependencies": {
    "gulp": "^4.0.2"
  }
  //在js文件中通过【console.log(process.env.npm_package_config_env)】语句可以打印【production】
  "config": {
    "env":"production"
  }
}
```

# nodemon
nodemon 是一个npm包,可以是node.js运行时能够自动监听代码变化,从而重新启动
文档:https://www.npmjs.com/package/nodemon

# mime
用于拓展名和首部字段:content-type之间转换的包
npm install mime -S
文档 https://www.npmjs.com/package/mime

# yarn 源的切换
1、查看一下当前源
yarn config get registry
2、切换为淘宝源
yarn config set registry https://registry.npm.taobao.org
3、或者切换为自带的
yarn config set registry https://registry.yarnpkg.com

# body-parser
一个用来解析nodejs body 中间件的npm包
文档 https://www.npmjs.com/package/body-parser

# 请求方法
  get:查询数据
  post:添加数据
  delete:删除数据
  put:修改数据-覆盖式修改(需要传递所有数据)
  patch:修改数据-增量修改(只传递需要修改的数据)

# express template
  ejs
  pug
  jade
  art-template

# 页面render
  -SSR(Server Side Render)
  -CSR(Client Side Render)