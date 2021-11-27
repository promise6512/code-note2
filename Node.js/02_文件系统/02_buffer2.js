//Buffer.allocUnsafe(size)  创建一个指定大小的buffer 但是buffer中可能含有敏感数据
let buf = Buffer.allocUnsafe(10);
console.log(buf);

let buf2 = Buffer.from('欢迎报考浙江大学');
console.log(buf2.toString());