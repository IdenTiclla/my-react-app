import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'

import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
console.log(tasks)

class App extends Component {

    state = {
        tasks: tasks
    }

    render() {
        return (
            <div>
                <TaskForm></TaskForm>
                <Tasks tasks={this.state.tasks}></Tasks>
            </div>
        )
    }
}





export default App;
