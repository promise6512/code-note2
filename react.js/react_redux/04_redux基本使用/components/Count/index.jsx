import React, { Component } from 'react'
export default class Count extends Component {
    //引入actionCreator 专门用于创建action对象
    calculate = id => {
        const value = +this.selectNum.value;
      //  console.log(this.props)
      //props属性中含有容器组件传递的属性count和方法inc dec和incAsync
        if(id === 1){
            this.props.inc(value)
        }else if(id === 2){
            this.props.dec(value)
        }else if(id === 3){
            if(this.props.count%2){
                this.props.inc(value)
            }
        }else{
            this.props.incAsync(value,500)
        }      
    }
    render() {
        return (
            <div>
                <h3>当前的和为 : {this.props.count}</h3>
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
