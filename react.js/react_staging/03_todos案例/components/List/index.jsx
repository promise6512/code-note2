import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from "../Item"
export default class List extends Component {
    static propTypes = {
        todos : PropTypes.array.isRequired,
        updateTodo : PropTypes.func.isRequired,
        delTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,delTodo} = this.props
        //console.log(todos)
       // console.log(updateTodo)
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                       // console.log({...todo})
                       
                        return <Item key={todo.id}{...todo} updateTodo={updateTodo} delTodo={delTodo}/>
                    })
                }
            </ul>
        )
    }
}
