import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';

import tasks from './sample/tasks.json'

import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'


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
    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        })
    }
    checkDone = (id) => {
        const newTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done
            }
            return task
        })
        this.setState({
            tasks: newTasks
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Link to="/">Home</Link>
                    <br></br>
                    <br></br>
                    <Link to="/posts">Posts</Link>
                    <Route exact path="/" render={()=> {
                        return (<div>
                            <TaskForm addTask={this.addTask}></TaskForm>
                            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}></Tasks>
                        </div>)
                    }}>

                    </Route>
                    <Route exact path="/posts" component={Posts}></Route>
                </Router>
            </div>
        )
        
        
    }
}





export default App;
