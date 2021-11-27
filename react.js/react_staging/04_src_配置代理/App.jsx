import React, { Component } from 'react' 
import axios from 'axios'

export default class app extends Component {
    //函数体
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('成功',response.data)},
            error => {console.log('失败',error)}

        )
    }

    getCarsData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('成功',response.data)},
            error => {console.log('失败',error)}

        )
    }
    render() {
        return (
            <div>
                <button onClick = {this.getStudentData}>点我获取学生数据</button>
                <br /><br />
                <button onClick = {this.getCarsData}>点我获取汽车数据</button>
            </div>
        )
    }
}
