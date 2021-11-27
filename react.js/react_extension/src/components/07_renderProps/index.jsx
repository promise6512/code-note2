import React, { Component } from 'react'
import './index.css'
import C from '../01_setState'
export default class Demo extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是parent组件</h3>
                {/* 
                   这种方式会使B组件变为A组件的子组件 
                    B保存在A的this.props.childen中
                    但是B组件无法得到A中的数据
                */}
                {/*   <A>
                    HELLO
                    <B/>
                </A> */}
       
                {/* 将一个函数赋值给A的render属性 */}
                {/* name将作为属性传递给B组件 */}
                {/* ps这里的属性不写render 写sb zju 都可以 */}
                <A render={(name)=><C name={name}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state ={name:'Tom'}
   
	render() {
        console.log(this.props.render())
        const {name} = this.state
		return (
			<div className="a">
				<h3>我是A组件{/* {this.props.children} */}</h3>
                {/* 调用render 展示返回的组件 */}
                {this.props.render(name)}
			</div>
		)
	}
}

class B extends Component {
	render() {
		console.log('B--render');
		return (
			<div className="b">
				<h3>我是B组件{this.props.name}</h3>
                
			</div>
		)
	}
}