//引入CountUI组件
import CountUI from '../../components/Count'
//引入connect用于连接UI组件和redux
import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction} from '../../redux/count_action';
//创建容器组件CounteContainer 并与CountUI建立联系
/* const CounteContainer = connect()(CountUI)
export default CounteContainer; */

/* 
   React-Redux内部会取出store的state和dispatch,并分别传给mapStateToProps和mapDispatchProps
*/
//将store的状态传递给UI组件
const mapStateToProps = (state) => {
    return {count:state}
}
//向UI组件提供一个方法，用于获取UI组件的data并发送给store
const mapDispatchProps = (dispatch) => {
    return {
        inc:(data)=>dispatch(createIncrementAction(data)),
        dec:(data)=>dispatch(createDecrementAction(data)),
        incAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
    }
}
//简写暴露 
export default connect(mapStateToProps,mapDispatchProps)(CountUI)