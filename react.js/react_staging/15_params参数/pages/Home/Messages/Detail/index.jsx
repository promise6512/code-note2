import React, { Component } from 'react'
const detailContent = [
    {id:1,content:'机设，狗都不学'},
    {id:2,content:'工热，狗都不学'},
    {id:3,content:'电工，狗都不学'}
]
export default class Detail extends Component {  
    render() {
        //console.log(this.props)
        const {id,title} = this.props.match.params
        const findResult = detailContent.find((element) => {
            console.log('element.id',element.id ,typeof element.id)
            console.log('id',id,typeof id)
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
