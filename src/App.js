import React from 'react';
import './App.css';

function Helloworld(props) {
    console.log(props)
    return (
        <div id="hello">
            <h3>{props.subtitle}</h3>
            {props.mytext}
        </div>
    )
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
