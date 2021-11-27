const path = require("path");
console.log(__dirname)
//c:\Users\86198\Desktop\code\Node.js\05_qf_basic\02_tools\01_modules\01_buildins
console.log(path.resolve(__dirname)) 
//打印当前路径   c:\Users\86198\Desktop\code\Node.js\05_qf_basic\02_tools\01_modules\01_buildins
console.log(path.resolve(__dirname,"../")) 
//打印上一层路径 c:\Users\86198\Desktop\code\Node.js\05_qf_basic\02_tools\01_modules