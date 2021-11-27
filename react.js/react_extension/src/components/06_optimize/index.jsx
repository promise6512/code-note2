import React, { PureComponent } from 'react'
import './index.css'
/* 
    只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
    只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低
*/
/* 
    PureComponent 
        在更新组件前自动比较state和props 决定是否调用render
        可以替代本例中的shouldComponentUpdate
*/
export default class Parenet extends PureComponent {
    state = { carName: '奔驰c36',student:['小张','小李','小王'] }
    changeCar = () =>{
        this.setState(state=>({carName:'迈巴赫'}))
        
        //下方语句不会更新组件
        //因为this.setState(obj)是进行浅比较 只比较对象的引用地址 不比较具体内容

       /*  const obj = this.state
        obj.carName = '迈巴赫'
        console.log(obj===this.state)
        this.setState(obj) */
    }
    addStudent = () =>{
       /* 
         同样得 这里也不会更新state
         因为只比较了student数组储存的地址 没有比较具体内容
        */
        const {student} = this.state;
        student.unshift('小刘')
        console.log(student)
        this.setState({student})
    }
    /* 
        shouldComponentUpdate
            可以接收两个参数
                nextProps--->即将要变的目标Props
                nextState--->即将要变的目标State
            该生命周期钩子必须返回一个boolean
                若为true 则调用render
                若为false 则不调用render
    */
   /*  shouldComponentUpdate(nextProps,nextState){
        //return true
        //console.log(this.state)
        //console.log(nextState)
       // console.log(!(this.state.carName === nextState.carName))
        //return true
        return !(this.state.carName === nextState.carName)
    } */
    render() {
        console.log('parent--render')
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是:{carName}</span>
                <button onClick={this.changeCar}>点我换车</button>
                <hr />
                {
                    this.state.student
                }
                <button onClick={this.addStudent}>点我加学生</button>
                <Child carName={carName}/>
            </div>
        )
    }
}

class Child extends PureComponent {
    /* shouldComponentUpdate(nextProps,nextState){
        return !(this.props.carName===nextProps.carName)
    } */
    render() {
        console.log('child--render')
        const {carName} = this.props
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车是:{carName}</span>
            </div>
        )
    }
}
