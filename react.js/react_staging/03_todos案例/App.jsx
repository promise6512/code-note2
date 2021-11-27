import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'
export default class App extends Component {
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'写代码',done:true}
    ]};

    //添加todo(用于和Header组件的信息传递)
    addTodo = (name) =>{
        const {todos} = this.state;
        const newTodos =[{id:nanoid(),name:name,done:false},...todos]
        this.setState({ todos:newTodos });
    }
    
    //更新Todo(用于和Item组件的信息传递)
    updateTodo = (id) => {
        const {todos} = this.state;
        todos.forEach((element)=>{
            if(element.id === id){
                element.done = !element.done;
                return element; 
            }else{
                return element
            }
        })
        this.setState({ todos  });
    }
    //删除todo
    delTodo = (id) => {
        const {todos} = this.state;
        /* todos.forEach((element,index,array)=>{
            if(element.id===id){
                array.splice(index,1);
                return
            }
        }) */
        //过滤数组元素
        const newTodos = todos.filter(element=>element.id !==id)
        this.setState({ todos:newTodos  });
    }

    //清除已完成的todos
    clearDoneTodos = () =>{
        const {todos} = this.state;
        const newTodos = todos.filter(element=>{
            return !element.done
        })
        this.setState({ todos:newTodos  });
    }

    //全选Tods
    checkAllTodos = (flag) => {
        const {todos} = this.state;
        todos.forEach(element=>{
            element.done = flag;
            return element
        })
        this.setState({ todos  });
    }
    render() {
        const {todos} = this.state;
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        {/* 此处todos为列表 */}
                        <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
                        <Footer todos={todos} clearDoneTodos={this.clearDoneTodos} checkAllTodos={this.checkAllTodos}/>
                    </div>
                </div>
            </div>
        )
    }
}


