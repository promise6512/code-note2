import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';
export default class Search extends Component {
    search = () => {
        const {keyWordElement:{value:keyWord}} = this;
        PubSub.publish('hjp',{isFirst:false,isLoading:true})

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            (response)=> {
               //updateState({users:response.data.items ,isLoading:false})
                /* 
                   将消息发布给订阅了消息的List组件(传递给data形参)
                */
                PubSub.publish('hjp',{isLoading:false,users:response.data.items})
            },
            (error) => {
                //updateState({error:error ,isLoading:false})
                PubSub.publish('hjp',{isLoading:false,error:error})
            }
        )

        //发布消息

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref = {c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick = {this.search}>Search</button>
                </div>
            </section>
        )
    }
}
