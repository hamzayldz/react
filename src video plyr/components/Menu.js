import React, { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Video from './Video'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul> 
         <li> <Link to={'/fast'} >Fast</Link></li>
         <li><Link to={'/slow'} >slow</Link></li> 
         <li><Link to={'/cute'} >Cute</Link></li> 
         <li><Link to={'/eek'} >eek</Link></li> 
        </ul>
        <Routes>
            <Route path={'/:tip'} element={<Video/>}/>
        </Routes>

      </div>
    )
  }
}
