import React, { Component } from 'react'

class CounterClassComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    render() {
        return (
            <div style={{backgroundColor:"red"}}>
                <h1>Counter Class Component</h1>
                <h3>Counter: {this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Add</button>
            </div>
        )
    }
}

export default CounterClassComponent