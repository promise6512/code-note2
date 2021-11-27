/* 
    webpack.config.js  webpack的配置文件
       作用:指示webpack干哪些活(当你运行webpack指令时,会加载里面的配置) 

       所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
*/
module.exports = {
    //webpack配置
    //入口起点
    entry:"./src/index.js",
    //输出
    output:{
        //输出路径
        //__dirname是nodejs的变量,代表当前文件的目录绝对路径
        path:__dirname+"/build",
        //输出文件名
        filename:"built.js"
    },
    //loader的配置
    module:{
        rules:[
            //详细配置loader配置
            //不同文件配置不同loader
            {
                //use数组中loader执行顺序:从下倒上,一次执行
                //匹配哪些文件
                test:/\.css$/,
                //使用哪些loader进行处理
                use:[
                    //npm install css-loader style-loader -D
                    //创建style标签,将js中的样式资源插入进行,添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载到js中,内容里面是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    //less-loader将less文件编译成css文件
                    //npm install  less-loader less -D
                    "less-loader"
                ]
            }
        ]
    },
    //plugins的配置
    plugins:[

    ],
    //模式
    mode:'development',
    //mode:'production'
}