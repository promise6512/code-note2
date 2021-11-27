import React, { Component } from 'react'
import {Button} from 'antd'
//import 'antd/dist/antd.css'
import './App.less';

import { TimePicker } from 'antd';
import moment from 'moment';
export default class App extends Component {  
    render() {
        const format = 'HH:mm';
        return (
            <div>
                APP...
                <button>111</button>
                <Button>点我</Button>
                <Button type="primary">Primary Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </div>
            
        )
    }
}
