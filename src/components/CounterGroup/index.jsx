import React, {Component} from 'react'
import Counter from '../Counter';

class CountGroup extends Component{
    constructor(props){
        super(props);
        this.size = props.size;
    }

    render(){
        const initArray = [...Array(this.size).keys()];
        console.log(initArray)
        return <div>
            {
                initArray.map(key => <Counter key={key}/>)
            }
        </div>
    }

}

export default CountGroup