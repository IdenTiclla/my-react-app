import React, { Component } from 'react'
import Task from './Task'

class Tasks extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        return (
            this.props.tasks.map(task => (
                <Task task={task} key={task.id}></Task>
            ))
        )
    }
}

export default Tasks