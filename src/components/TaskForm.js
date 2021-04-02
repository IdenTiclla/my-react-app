import React, {Component} from 'react'


class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        
    }

    onSubmit(e) {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()
    }

    onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })

    }



    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Write a Task." 
                    onChange={this.onChange} 
                    value={this.state.title}>    
                </input>
                <br></br>
                <br></br>
                <textarea
                    name="description" 
                    placeholder="Write a description"
                    onChange={this.onChange}
                    value={this.state.description}>
                </textarea>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        )
    }
}

export default TaskForm