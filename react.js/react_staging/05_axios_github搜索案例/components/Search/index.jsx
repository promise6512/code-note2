import React, { Component } from 'react'
import axios from 'axios';
export default class Search extends Component {
    search = () => {
        /* const {getUsers,getIsFirst,getIsLoading,getError} = this.props; */
        const { updateState } = this.props;

        /*  getIsFirst(false)
         getIsLoading(true) */
        updateState({ isFirst: false, isLoading: true })
        //连续解构赋值 
        //只定义了value 没有定义keyWordElement
        //{value:keyWord} 将value重命名为keyWord
        const { keyWordElement: { value: keyWord } } = this;
        // console.log(keyWord);
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            (response) => {
                /* getIsLoading(false)
                getUsers(response.data.items) */
                // console.log(getUsers,response.data.items);
                updateState({ users: response.data.items, isLoading: false })
            },
            (error) => {
                /* console.log(error,typeof(error))
                getIsLoading(false)
                getError(error) */
                updateState({ error: error, isLoading: false })
            }
        )

        //#region axios的await优化
      /*   try {
            const response = await axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            PubSub.publish('hjp', { isLoading: false, users: response.data.items })
        } catch (error) {
            PubSub.publish('hjp', { isLoading: false, error: error })
        } */
        //#endregion
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
