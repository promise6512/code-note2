import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
export default class Count extends Component {
    //引入actionCreator 专门用于创建action对象
    calculate = id => {
        const value = +this.selectNum.value;
        if(id === 1){
            store.dispatch(createIncrementAction(value))
        }else if(id === 2){
            store.dispatch(createDecrementAction(value))
        }else if(id === 3){
            if(store.getState()%2){
                store.dispatch(createIncrementAction(value))
            }
        }else{
            store.dispatch(createIncrementAsyncAction(value,500))
        }      
    }
    render() {
        return (
            <div>
                <h3>当前的和为 : {store.getState()}</h3>
                <select ref = {c => {this.selectNum = c}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;<button onClick={ () => this.calculate(1)}>increment</button>
                &nbsp;<button onClick={ () => this.calculate(2)}>decrement</button>
                &nbsp;<button onClick={ () => this.calculate(3)}>incrementIfOdd</button>
                &nbsp;<button onClick={ () => this.calculate()}>incrementAsync</button> 
            </div>
        )
    }
}
