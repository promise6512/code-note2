import React,{Component} from 'react'
import ReactDOM from 'react-dom'
/* 
export default class Demo extends Component {
    state={count:0};
    add = () => {
        this.setState((state)=>{
            return {count:state.count+1}
        })
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState(state=>({count:state.count+1}))
        },500)
    }
    componentWillUnmount(){
        console.log(this.timer)
        clearInterval(this.timer)
    }
    unmount = () =>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    render() {
        return (
            <div>
                <h3>当前的和为{this.state.count}</h3>
                <button onClick={this.add}>clickToAdd</button>
                <button onClick={this.unmount}>卸载组件</button>
            </div>
        )
    }
} */

function Demo(){
    //count为状态
    //setCount为修改状态的方法
    const [count,setCount] = React.useState(0);
    //可以多次调用React.useState() 产生个状态和方法
    const [name,setName] = React.useState('hjp')
    function add(){
        //写法1
        //setCount(count+1) 
        //写法2
        setCount(count=>count+1)             
    }
    function changeName(){
        setName('zy')
    }
    
     /* React.useEffect
            React.useEffect可以模拟声明周期钩子
            第一个参数为回调函数 它会在组件过载时执行
            第二个参数为数组 数组中传递想要监测的状态  被监测的状态发生改变时调用回调函数
            若省略第二个参数 则默认为监测所有的状态
    */
    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1) 
        },500)
        //React.useEffect返回一个函数 该函数会在组件卸载时调用
        return () => {
            clearInterval(timer)
        }
    },[])
    
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    
    //创建一个Ref容器
    //一个Ref只能储存一个元素
    const myRef = React.useRef()

    function show(){
        console.log(myRef)
        alert(myRef.current.value)
        myRef.current.value=''
    }
    return (
        <div>
            <h3>当前的和为{count}</h3>
            <h3>my name is {name}</h3>
            <input type="text" ref={myRef}/>
            {/* <input type="text" ref={myRef} /> */}
            <button onClick={add}>clickToAdd</button>&nbsp;
            <button onClick={changeName}>changeNames</button>&nbsp;
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示</button>
        </div>
        
    )
}
export default Demo;