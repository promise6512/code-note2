/* 
    Buffer(缓冲区)
        -Buffer的结构和数组很像 操作的方法也和数组类似
        -数组中不能存储二进制文件 而buffer专门存储二进制数据
        -使用buffer不需要引入模块 直接使用即可
        -buffer中存储的是二进制数据 但是显示时都是以16进制的形式显示的
            buffer中每一个元素的范围是从00 - ff 0-255
            00000000 - 11111111 
            因此，
            buffer中的一个元素占用一个字节

*/
let str = 'Hello Atguigu';

//将一个字符串保存到buffer
let buf = Buffer.from(str)
console.log(buf)
console.log(buf.length)  //占用的内存大小

let buf2 = Buffer.from('尚硅谷')  //一个汉字三个字节
console.log(buf2)
console.log(buf2.length)

//创建一个指定大小的buffer
//buffer的构造函数不推荐使用
/* let buf3 = new Buffer(10)  //10个字节
console.log(buf3.length) 
 */

//创建10个字节大小的buffer
let buf4 = Buffer.alloc(10);
console.log(buf4)

//通过索引为buf4中的元素赋值
buf4[0] = 16;   //为自动转换为16进制
buf4[1] = 0x16  
buf4[2] = 556;  //溢出时会取二进制后八位
console.log(buf4)

//Buffer的大小一旦确定就无法修改 Buffer 是对底层的操作
//Buffer中的输出在控制台或页面输出时会转换为10进制

console.log(buf4[1])

//调用toStrong(num)方法 可以将buffer中的内容转换为num进制的数字并以字符串的形式输出
console.log(buf4[1].toString(2))

for(let i = 0; i < buf2.length;i++){
    console.log(buf4[i])
}

