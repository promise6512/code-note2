import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (event) =>{
        const {checkAllTodos} = this.props;
        checkAllTodos(event.target.checked)
    }
     
    handleClearAll = () =>{
        const {clearDoneTodos} = this.props;
        if(window.confirm('are you sure to clear all todos?')){
            clearDoneTodos()
        }
    }
    render() {
        const {todos} = this.props;
        //已完成个数
        const doneCount = todos.reduce((acc,cur)=>{
            if(cur.done) return acc+1;
            return acc;
        },0)

       
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===todos.length&&doneCount!==0}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick ={this.handleClearAll}>清除已完成任务</button>
            </div>
        )
    }
}
