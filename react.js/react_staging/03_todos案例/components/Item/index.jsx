import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {mouse:false,done:this.props.done}

    //标识鼠标移入移出
    handleMouse = (flag) => {

        return () =>{
            this.setState({ mouse:flag });
        }
    }
   
    //控制勾选框done状态
    handleCheck = (id) => {
        return ()=>{
            const {updateTodo} = this.props;
            updateTodo(id)
          //  console.log(updateTodo)
        }
    } 

    //删除item
    handleDelete = (id) => {
        return ()=>{
            //此处的confirm必须加window
           if(window.confirm('are you sure to dellete it?')){
            const {delTodo} = this.props;
            delTodo(id)
          //  console.log(updateTodo)
           }
        }
    }
    render() {
       // console.log(this.props,'---')
        const {mouse} = this.state;
        const {id,name,done} = this.props
        return (
            <li style={{background:mouse?'#ddd':'white'}} onMouseOver = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange ={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse?'block':'none' }} onClick={this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
