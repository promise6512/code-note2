/* 
    exports
       只能通过.来暴露内部变量 
           exports.xxx = xxx
    module.exports可以通过两种方式赋值
           module.exports.xxx = xxx
           module.exports = {

           }
       
*/
module.exports = {
    name:'猪八戒',
    age:18,
    sayName:function(){
        console.log(this.name)
    }
}