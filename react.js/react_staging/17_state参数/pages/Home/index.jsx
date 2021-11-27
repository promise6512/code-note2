import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Redirect } from 'react-router-dom'
import News from './News';
import Messages from './Messages';
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>

                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news' children='news' />

                        </li>
                        <li>
                            <MyNavLink to='/home/messages' children='messages' />
                        </li>
                    </ul>
                    <div>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/messages' component={Messages} />
                        <Redirect to='/home/messages/detail'></Redirect>
                        {/* <Redirect to='/about'></Redirect> */}
                    </div>
                </div>
            </div>
        )
    }
}
