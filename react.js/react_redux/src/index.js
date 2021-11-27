import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store' 

ReactDOM.render(
    //此处需要用Provider包裹App
    //使App后代中所有的容器组件接收到store
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

//使用react-redux后无需手动监听redux的状态变化
/* store.subscribe(()=>{
    ReactDOM.render( <App />,document.getElementById('root'));
}) */