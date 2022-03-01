import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Messages extends Component {
  render() {
    return (
      <div>
          <h3> This is my messages page!</h3>

          <ul>
            <Link to={'/messages/1'}> <li key="1"> Message Number - 1 </li></Link>
            <Link to={'/messages/2'}> <li key="1"> Message Number - 2 </li></Link>
            <Link to={'/messages/3'}> <li key="1"> Message Number - 3 </li></Link>          </ul>

      </div>
    )
  }
}
