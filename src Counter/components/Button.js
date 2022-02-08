import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return <div>
         <button onClick={this.props.increase}>+</button>
         <button onClick={this.props.decrease}>-</button>
    </div>;
  }
}
