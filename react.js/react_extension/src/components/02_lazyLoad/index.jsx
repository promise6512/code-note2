//引入lazy和Suspense
import React, { Component,lazy,Suspense } from 'react'
import { Link,  Route,Switch  } from 'react-router-dom'
import Loading from './Loading'
//import Home from './Home'
//import About from './About'
//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))
export default class Demo extends Component {

    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* 原生写法 */}
                                {/* <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home</a> */}

                                {/* 在React中通过路由链接切换组件 */}
                                {/* to 后面的路径尽量小写 */}
                                
                                <Link className="list-group-item " to="./about">About</Link>
                                <Link className="list-group-item " to="./home">Home</Link>

                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* 注册路由 */}
                                    {/* 懒加载的路由必须使用Suspense 包裹 */}
                                    {/* fallback中的内容将在加载中时显示 */}
                                    <Suspense fallback={<Loading/>}>
                                        <Switch>
                                           <Route path='/about' component={About} />
                                           <Route path='/home' component={Home} /> 
                                        </Switch>
                                    </Suspense>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}