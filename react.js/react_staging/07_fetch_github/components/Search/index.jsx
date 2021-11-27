import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';
export default class Search extends Component {
    search = async () => {
        const {keyWordElement:{value:keyWord}} = this;
        PubSub.publish('hjp',{isFirst:false,isLoading:true})
        
        //#region 使用axios发送网络请求
        /* axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            (response)=> {
               //updateState({users:response.data.items ,isLoading:false})
                PubSub.publish('hjp',{isLoading:false,users:response.data.items})
            },
            (error) => {
                //updateState({error:error ,isLoading:false})
                PubSub.publish('hjp',{isLoading:false,error:error})
            }
        ) */
        //#endregion
       
        //#region
        //使用Fetch发送网络请求
      /*   fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log("联系服务器成功")
                return response.json();
            },
        ).then(
            response => {
                console.log('获取数据成功',response)
            }
        ).catch(
            error => console.log('请求失败',error)
        ) */
        //#endregion
        
        //使用await优化
        try{
            const response = await fetch(`/api1/search/users2?q=${keyWord}`);
            const data = await response.json();
            PubSub.publish('hjp',{isLoading:false,users:data.items});
            //console.log(data)
        }catch(error){
            PubSub.publish('hjp',{isLoading:false,error:error});
            //console.log('请求出错',error)
        }
        
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
