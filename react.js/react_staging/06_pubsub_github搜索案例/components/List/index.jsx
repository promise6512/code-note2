import './index.css'
import PubSub from 'pubsub-js';
import React, {  Component } from 'react'

export default class List extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        error:''
    }

    componentDidMount(){
        /*
            传递一个回调函数
                参数:
                   消息订阅的名字,一般用不到 使用‘_’占坑
                   date:接收的消息
                this.token作为消息订阅的标识符
                    调用PubSub.unsubscribe(this.token)可以取消消息订阅
         */
        this.token = PubSub.subscribe('hjp',(_,data)=>{
            console.log(data)
            this.setState( data );
        })
    }
    
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        
        const { users,isFirst,isLoading,error } = this.state;
        return (
            <div className="row">

                {
                    isFirst ? <h2>Enter name to search</h2> :
                    isLoading ? <h2>please wait for loading</h2> :
                    error ? <h2> {error.message} </h2>:
                    users.map((element) => {
                        return (
                            <div key={element.id} className="card">
                                <a rel="noreferrer" href={element.html_url} target="_blank">
                                    <img src={element.avatar_url} alt='head_portrat' style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{element.login}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
