const EventEmitter = require("events");
class MyEventEmitter extends EventEmitter{

}

const event = new MyEventEmitter();
/* 
  绑定事件
    play为事件名
*/
event.on('play',(value)=>{
  console.log(value)
})
/* 
  触发事件
    'movie'为传入给事件回调函数的参数
*/
event.emit('play','movie')