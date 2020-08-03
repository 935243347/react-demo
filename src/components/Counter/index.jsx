import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }

    addNumber = () => {
        this.setState((prevState)=>({
            value: prevState.value + 1
        }))
    }

    reduceNumber = () => {
        this.setState((prevState)=>({
            value: prevState.value - 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.reduceNumber}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.addNumber}>+</button>
            </div>
        )
    }
}

export default Counter;