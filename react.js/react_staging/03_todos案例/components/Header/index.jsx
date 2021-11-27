import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./index.css"
export default class Header extends Component {
     //对接收props进行类型限制和必要性的限制
     static propTypes = {
        addTodo : PropTypes.func.isRequired,
    }
    //该方法在实例中 而不是在实例的原型中
    //键盘事件的回调
    handleKeyUp =(event) =>{
        const {keyCode , target} = event;
        if(keyCode !== 13 || target.value.trim()===''){
            return
        }else{
            const value = target.value.trim();
            console.log(value) 
            let {addTodo} = this.props;
            addTodo(value);
            //清空输入
            target.value = '';
        }

       
       
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
//let header  = new Header();
