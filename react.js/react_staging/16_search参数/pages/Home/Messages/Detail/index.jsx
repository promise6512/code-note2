import React, { Component } from 'react'
import qs from 'querystring';
const detailContent = [
    {id:1,content:'机设，狗都不学'},
    {id:2,content:'工热，狗都不学'},
    {id:3,content:'电工，狗都不学'}
]
export default class Detail extends Component {  
    render() {
        // 接收params参数
		// const {id,title} = this.props.match.params 
      
        const {search} = this.props.location;
      // console.log(search)
     /*  const obj = {id:1,name:2}
      console.log(qs.stringify(obj)) */
       const {id,title} = qs.parse(search.slice(1))

        const findResult = detailContent.find((element) => {
           // console.log('element.id',element.id ,typeof element.id)
           // console.log('id',id,typeof id)
            return element.id === +id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{findResult.content}</li>
            </ul>
        )
    }
}
