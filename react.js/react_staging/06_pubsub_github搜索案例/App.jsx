import Search from './components/Search'
import List from './components/List'
import React, { Component } from 'react'

export default class App extends Component {
   
    render() {
        return (
            <div className="container">
                <Search></Search>
                <List></List>
            </div>
        )
    }
}
