import './index.css'
import React, { Component } from 'react'

export default class List extends Component {

    render() {
        
        const { users,isFirst,isLoading,error } = this.props;
       // console.log(this.props)
        //console.log(users)
        return (
            <div className="row">

                {
                    isFirst ? <h2>Enter name to search</h2> :
                    isLoading ? <h2>please wait for loading</h2> :
                    error ? <h2> {error.message} </h2>:
                    users.map((element) => {
                        return (
                            <div key={element.id} className="card">
                                <a rel="noreferrer" href={element.html_url} target="_blank">
                                    <img src={element.avatar_url} alt='head_portrat' style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{element.login}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
