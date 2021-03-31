import React, { Component } from 'react'

class Task extends Component {
    render() {
        const {task} = this.props
        return (
            
            <div>
                    {task.title} - {task.description}
                    <input type="checkbox"></input>
                    <button>x</button>
            </div>
        )
    }
}

export default Task