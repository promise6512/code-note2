import React, {  Component } from 'react'
import './index.css'
//创建context对象
const MyContext = React.createContext()
//取出myContext的Provider属性 用于包裹祖先组件的后代组件
const  {Provider,Consumer} = MyContext
export default class A extends Component {
    state = {username:'Tom',age:18}  
    render() {
        console.log(MyContext)
        const {username,age} = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户是:{username}</h4>
                {/* 此处只能写value属性 */}
                {/* 以对象的形式可以传递多组数据 */}
                <Provider value={{username,age}}> 
                   <B/>
               </Provider> 
            </div>
        )
    }
}

class B extends Component {
    render(){
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h4>我的用户是:</h4>
                <C/>
            </div>
        )
    }
} 

//类组件的接收方式
/* class C extends Component {
    //指定静态属性 用于声明接收祖先组件传递的参数
    static contextType = MyContext
    render(){
        const {name,age} = this.context
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我的用户是:{name} 年龄是:{age}</h4>
            </div>
        )
    }
}  */

//函数式组件的接收
function C(){
    return (
        <div className="child">
            <h3>我是C组件</h3>
            
            <Consumer>
                {
                    //value为接收到的参数
                    value => {
                        //return 的内容会展示在页面
                        //return `${value.username} 年龄是:${value.age} `
                        return (
                            <h4>
                                <span>我的用户名是:{value.username}</span>&nbsp;&nbsp;&nbsp;
                                <span>我的年龄是:{value.age}</span>
                            </h4>
                        )
                    }
                }
            </Consumer>
            
        </div>
    )
}