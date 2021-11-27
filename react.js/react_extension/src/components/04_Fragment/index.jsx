import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
    render() {
        return (
            /*   
                Fragment
                    可以代替组件中的根标签以包裹组件中所有的后代标签
                    Fragment不会被渲染到DOM中
                    也可以直接用空标签<></>包裹
                    但是<Fragment></Fragment>可以传递key属性,而空标签不行
                    <Fragment></Fragment>只能传递key属性 传递了其他属性会报错
            */
            <Fragment>
                <input type="text" />
                <input type="text" />
            </Fragment>
        )
    }
}
