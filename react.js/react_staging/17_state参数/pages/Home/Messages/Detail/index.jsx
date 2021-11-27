import React, { Component } from 'react'
//import qs from 'querystring';
const detailContent = [
    {id:1,content:'机设，狗都不学'},
    {id:2,content:'工热，狗都不学'},
    {id:3,content:'电工，狗都不学'}
]
export default class Detail extends Component {  
    render() {
        // 接收params参数
		// const {id,title} = this.props.match.params 

		// 接收search参数
		// const {search} = this.props.location
		// const {id,title} = qs.parse(search.slice(1))

        //接收state参数
        const {id,title} = this.props.location.state || {}

        const findResult = detailContent.find((element) => {
           // console.log('element.id',element.id ,typeof element.id)
           // console.log('id',id,typeof id)
            return element.id === +id
        }) || {}
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{findResult.content}</li>
            </ul>
        )
    }
}
