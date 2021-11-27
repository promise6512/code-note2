/* 
  Math.floor向下取整
*/
let a = 1;
let b = 8;
console.log(Math.floor(a+b/2))  // -->5
/* 
  链表快慢指针找中间节点
*/

/* 
  Array.prototype.sort()
*/
//将数组从小到大排序
let arr = [1,5,3,2,4];
let arr1 =  arr.sort((a,b) => a-b);
console.log(arr);  //[ 1, 2, 3, 4, 5 ]
console.log(arr1); //[ 1, 2, 3, 4, 5 ]
console.log(arr === arr1)  //true

//如果不传入回调函数,则默认按照字符的Unicode位点进行排序
let arr2 = [11,2,3,22,5]
arr2.sort();
console.log(arr2) //[ 11, 2, 22, 3, 5 ]

/* 
  String.prototype.charCodeAt()
  String.fromCharCode()
*/
console.log("a".charCodeAt()) //97
console.log(String.fromCharCode(97)) //a