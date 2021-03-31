import React, { Component } from 'react';
import './App.css';



class Helloworld extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
        this.toggleShow = this.toggleShow.bind(this)
    }
    


    toggleShow() {
        this.setState({show: !this.state.show})
    }

    render() {
        if (this.state.show) {
            return (
                <div id="hello">
                    <h3>{this.props.subtitle}</h3>
                        {this.props.mytext}

                    <button onClick={this.toggleShow}>Toggle show</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>No hay elementos</h1>
                    <button onClick={this.toggleShow}>Toggle show</button>
                </div>
            )
        }
    }
}

function App() {
    return (
        <div>
            <Helloworld mytext="Hello fazt" subtitle="lorem ipsum"/>
            <Helloworld mytext="Hello iden" subtitle="component 2"/>
            <Helloworld mytext="Hello alex" subtitle="component 3"/>
        </div>
    )
    
}





export default App;
