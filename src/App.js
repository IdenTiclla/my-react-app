import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'

import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'


class App extends Component {

    state = {
        tasks: tasks
    }

    addTask = (title, description) => {
        console.log(title, description)
        const newTask = {
            title: title,
            description: description,
            done: false,
            id: this.state.tasks.length + 1
        }
        console.log(newTask)
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    render() {
        return (
            <div>
                <TaskForm addTask={this.addTask}></TaskForm>
                <Tasks tasks={this.state.tasks}></Tasks>
            </div>
        )
    }
}





export default App;
