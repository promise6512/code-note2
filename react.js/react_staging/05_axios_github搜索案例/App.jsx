import Search from './components/Search'
import List from './components/List'
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        error:''
    }
    updateState = (stateObj) => {
        this.setState( stateObj );
    }
   /*  getUsers = (users) => {
        this.setState({ users });
    }

    getIsFirst = (isFirst) => {
        this.setState({ isFirst  });
    } 
    
    getIsLoading =(isLoading) => {
        this.setState({ isLoading  });
    }
    
    getError = (error) => {
        this.setState({ error  });
    } */
    render() {
        return (
            <div className="container">
                <Search /* getUsers = {this.getUsers} 
                        getIsFirst = {this.getIsFirst} 
                        getIsLoading = {this.getIsLoading} 
                        getError = {this.getError} */
                        updateState = {this.updateState}
                ></Search>
                <List {...this.state}></List>
            </div>
        )
    }
}
