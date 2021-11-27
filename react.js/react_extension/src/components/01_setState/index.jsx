import React, { Component } from 'react'
export default class Demo extends Component{
    state = {
        count:0
    }
    add = () =>{
        
        //对象式setstate
        //const {count} = this.state;
       /*  this.setState({count:count+1},()=>{
            console.log('after update',this.state.count)
        })
        console.log('before update',this.state.count) */

        //函数式的state
        this.setState((state,props)=>{
            console.log(state,props)
            return {count:state.count+1}
        },()=>{
            console.log('after update')
        })
    }
    render() {
        return (
            <div>
                <h2>当前求和为: {this.state.count}</h2>
                <button onClick={this.add}>clickToInc</button>
            </div>
        )
    }
}
