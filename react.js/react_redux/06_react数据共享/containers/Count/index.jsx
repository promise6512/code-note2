//引入connect用于连接UI组件和redux
import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction} from '../../redux/actions/count';
import React, { Component } from 'react';

//定义UI组件
class Count extends Component {
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
                <h4>personNum:{this.props.perNum}</h4>
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
//定义并暴露container组件
export default connect(
    state => ({count:state.count,perNum:state.person.length}),
    /* dispatch => 
    ({
        inc:(data)=>dispatch(createIncrementAction(data)),
        dec:(data)=>dispatch(createDecrementAction(data)),
        incAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
    }) */
    {
        //mapDispatchToProps的简化写法
        //向CountUI传递对象，对象中的方法会变为CountUI props中的方法
        //CountUI返回data后生成action 容器组件自动将action 发送(dispatch)给store
        inc:createIncrementAction,
        dec:createDecrementAction,
        incAsync:createIncrementAsyncAction
    }
)(Count)