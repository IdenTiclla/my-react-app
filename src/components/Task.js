import React, { Component } from 'react'

import PropTypes from 'prop-types'

import './Task.css'
class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through': 'none'
        }
    }
    render() {
        const {task} = this.props
        return (
            
            <div style={this.StyleCompleted()}>
                    {task.title} - {task.description} - {task.id}
                    <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}></input>
                    <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                        x
                    </button>
            </div>
        )
    }
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task