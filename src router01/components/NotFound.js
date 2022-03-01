import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div> <h3> Error 404 Not NotFound</h3>
      <Link to='/'>Return Home page</Link>
          </div>
    )
  }
}
