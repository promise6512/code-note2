import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
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
        return (
            <div>
                <button onClick={this.back}>后退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}
//withRouter传递一个普通组件
//可以将使普通组件拥有路由组件的API
export default withRouter(Header)
