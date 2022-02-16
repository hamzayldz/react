import React from 'react';
import { names } from './names';

export class Select extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
handleChange=(e)=>{
console.log(e.target.value)
this.props.changeName(e)
}

  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
          {names.map((item,i)=>{
            return <option key={i} value={item}>{item}</option>})}
        </select>
      </div>
    );
  }
}