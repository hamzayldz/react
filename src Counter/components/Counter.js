import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
    state={
        count: 0
    }
    increase =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrease =()=>{
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    return <div>
        <div className='card'>
           <h1>{this.state.count}</h1>
         {/* <button onClick={this.increase}>+</button> */}
        <Button increase={this.increase} decrease={this.decrease}/>
        </div>
    </div>;
  }
}
