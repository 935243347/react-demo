import React, {Component} from 'react'
import Counter from '../Counter';

class CountGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            size: props.size,
            totalNumber: 0,
        };
    }

    handleResize = (event) =>{
        if(event.target.value==this.state.size){
            return null;
        }
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0,
            totalNumber: 0
        })
    }

    handleIncrease = () =>{
        this.setState((prevState)=>({
            totalNumber: prevState.totalNumber + 1
        }))
    }
    
    handleReduce = () =>{
        this.setState((prevState)=>({
            totalNumber: prevState.totalNumber - 1
        }))
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
        // console.log(this.state.countList)
        return <div>
            <div>
                <label>Group size: </label>
                <input onBlur={this.handleResize} defaultValue = {6}/>
            </div>
            <div>
                <label>Total Number: </label>
                <span>{this.state.totalNumber}</span>
            </div>
            {
                initArray.map(key => 
                <Counter groupsize={this.state.size} onIncrease={this.handleIncrease} onReduce={this.handleReduce}  key={key}/>)
            }
        </div>
    }

}

export default CountGroup;