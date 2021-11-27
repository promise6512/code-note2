import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
    componentDidMount(){
        //用于监听store中的状态变化
      /*   store.subscribe(()=>{
            this.setState({})
        }) */
    }
    calculate = id => {
        const value = +this.selectNum.value;
        if(id === 1){
            store.dispatch({type:'increment',data:value})
        }else if(id === 2){
            store.dispatch({type:'decrement',data:value})
        }else{
            if(store.getState()%2){
                store.dispatch({type:'increment',data:value})
            }
        }
       // this.setState({count})
    }
    incrementAsync = () => {
       // let {count} = this.state;
        const value = +this.selectNum.value
        setTimeout(()=>{
           store.dispatch({type:'increment',data:value})
        },500)
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
                &nbsp;<button onClick={ () => {this.calculate(1)}}>increment</button>
                &nbsp;<button onClick={ () => {this.calculate(2)}}>decrement</button>
                &nbsp;<button onClick={ () => {this.calculate(3)}}>incrementIfOdd</button>
                &nbsp;<button onClick={this.incrementAsync}>incrementAsync</button> 
            </div>
        )
    }
}
