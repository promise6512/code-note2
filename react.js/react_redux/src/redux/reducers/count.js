/* 
   该文件创建一个为count服务的reducer
       1.reducer的本质是函数
       2.reducer会接到两个参数 分别为:之前的状态(prestate),动作对象(action)
*/
import { INCREMENT,DECREMENT } from "../constant";
const initState = 0;
export default function countReducer(prestate=initState,action){
    const {type,data} = action;
    switch(type){
        case INCREMENT:
            return prestate + data;
        case DECREMENT:
            return prestate - data;
        default:
            return prestate
    }
}