import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            value: 0,
            groupSize: 0 
        }
    }

    addNumber = () => {
        this.setState((prevState)=>({
            value: prevState.value + 1
        }))
        this.props.onIncrease();
    }

    reduceNumber = () => {
        this.setState((prevState)=>({
            value: prevState.value - 1
        }))
        this.props.onReduce();
    }

    static getDerivedStateFromProps(props,state){
        if(props.groupsize!=state.groupsize){
            return {
                value:0,
                groupsize:props.groupsize
            };
        }
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