import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import Detail from './Detail';
export default class Messages extends Component {
    render() {
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
                                    {/* <Link to={`/home/messages/detail/${element.id}/${element.title}`} >{element.title}</Link> */}
                                    
                                    {/* 向路由组件传递search */}
                                    {/* <Link to={`/home/messages/detail/?id=${element.id}&title=${element.title}`} >{element.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/home/messages/detail',state:{id:element.id,title:element.title}}} >{element.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由，声明接收params参数 */}
                {/* <Route path='/home/messages/detail/:id/:title' component={Detail}/> */}

                {/*search参数无需声明接收 正常注册即可  */}
                {/* <Route path='/home/messages/detail' component={Detail}/> */}

                {/*stateh参数无需声明接收 正常注册即可  */}
                <Route path='/home/messages/detail' component={Detail}/>

            </div>
        )
    }
}
