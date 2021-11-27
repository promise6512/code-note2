import React, { Component } from 'react'
import { Route, Link,Redirect } from 'react-router-dom';
import Detail from './Detail';
export default class Messages extends Component {
    replaceShow = (id,title) => {
        //replace跳转+携带params参数
        //this.props.history.replace(`/home/messages/detail/${id}/${title}`)

        //replace跳转+携带search参数
        //this.props.history.replace(`/home/messages/detail/?id=${id}&title=${title}`)

        //replace跳转+携带state参数
        this.props.history.replace(`/home/messages/detail`,{id,title}) /* 对象简写 */
    }
    pushShow = (id,title) => {
        //push跳转+携带params参数
        //this.props.history.push(`/home/messages/detail/${id}/${title}`)

        //replace跳转+携带search参数
       // this.props.history.push(`/home/messages/detail/?id=${id}&title=${title}`)

         //replace跳转+携带state参数
        this.props.history.push(`/home/messages/detail`,{id:id,title:title})
    } 
    
    forward = () => {
        this.props.history.goForward();
    }
    back = () => {
        this.props.history.goBack()
    }
    go = () => {
        this.props.history.go(-2)
    }
    

    render() {
        //console.log('msg',this.props)
        const messageArr = [
            { id: 1, title: '消息1' },
            { id: 2, title: '消息2' },
            { id: 3, title: '消息3' }
        ]
        
        return (
            <div>
                <ul>
                    {
                        messageArr.map((element) => {
                            return (
                                <li key={element.id}>
                                    {/* 路由链接 传递params参数 */}
                                    {/*  <Link to={`/home/messages/detail/${element.id}/${element.title}`} >{element.title}</Link>*/}
                
                                    {/* 向路由组件传递search */}
                                    {/* <Link to={`/home/messages/detail/?id=${element.id}&title=${element.title}`} >{element.title}</Link>*/}
                    

                                    {/* 向路由组件传递state参数 */}
                                    {/* replace={true}可以开启replace模式 */}
                                    <Link /* replace={true}  */to={{pathname:'/home/messages/detail',state:{id:element.id,title:element.title}}} >{element.title}</Link>                    
                                    &nbsp;<button onClick={()=>this.replaceShow(element.id,element.title)}>replace</button>
                                    &nbsp;<button onClick={()=>this.pushShow(element.id,element.title)}>push</button>
                                    <Redirect to='/home/messages/detail'></Redirect>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由，声明接收params参数 */}
               {/*  <Route path='/home/messages/detail/:id/:title' component={Detail}/> */}

                {/*search参数无需声明接收 正常注册即可  */}
                {/* <Route path='/home/messages/detail' component={Detail}/> */}

                {/*stateh参数无需声明接收 正常注册即可  */}
                <Route path='/home/messages/detail' component={Detail}/>
                <button onClick={this.back}>后退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}
