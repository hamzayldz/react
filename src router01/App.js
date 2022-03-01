import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import NotFound from './components/NotFound';
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
<div className='menu'>

  <ul>
    <li><Link to="/">home </Link></li>
    <li><Link to="/about">about</Link></li>
    <li><Link to="/messages">messages</Link></li>
</ul>
  </div>
<div className='App-intro'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/messages' element={<Messages/>}/>
    <Route path='/*' element={<NotFound/>}/>
    <Route path='/messages/:id' element={<Message/>}/>
  </Routes>
</div>
      </div>
    );
  }
}

export default App;
