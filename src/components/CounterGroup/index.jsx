import React, {Component} from 'react'
import Counter from '../Counter';

class CountGroup extends Component{
    constructor(props){
        super(props);
        this.state = {size: props.size}
    }

    onResize = (event) =>{
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
        console.log(initArray)
        return <div>
            <label>Group size: </label>
            <input onBlur={this.onResize} defaultValue = {6}/>
            {
                initArray.map(key => <Counter key={key}/>)
            }
        </div>
    }

}

export default CountGroup;