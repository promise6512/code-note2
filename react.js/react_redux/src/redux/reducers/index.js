/* 
    该文件用于汇总reducer
*/
import { combineReducers } from 'redux'
//引入为Count服务的reducer
import count from './count' 
//引入为person服务的reducer
import person from './person'

export default combineReducers({
    count,
    person
})