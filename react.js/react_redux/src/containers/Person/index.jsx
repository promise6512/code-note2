import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/perspn'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        if (name && age) {
            const personObj = { id: nanoid(), name, age }
            this.props.addPerson(personObj)
            this.nameNode.value = '';
            this.ageNode.value = '';
        }
    }
    render() {
        return (
            <div>
                <h3>我是Person组件 count组件的和为:{this.props.count}</h3>
                <input ref={c => this.nameNode = c} /* style={{width:'200px'}} */ type="text" placeholder="please input name" />&nbsp;
                <input ref={c => this.ageNode = c} type="text" placeholder="please input age" />&nbsp;
                <button onClick={this.addPerson}>Add</button>
                <ul>
                    {
                        this.props.allPerson.map((personObj) => {
                            return (
                                <li key={personObj.id}>name:{personObj.name}---age:{personObj.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({ allPerson: state.person, count: state.count }),
    {
        addPerson: createAddPersonAction
    }
)(Person)