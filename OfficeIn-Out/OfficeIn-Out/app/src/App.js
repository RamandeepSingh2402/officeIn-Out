import { Card, Avatar } from 'material-ui';
import { Stack, Box } from '@mui/system';
import Typography from 'material-ui/styles/typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { Button } from 'bootstrap';
import {React, useState, Component} from 'react';
import Signup from './components/Signup';
import FirstTime from './components/FirstTime';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';


export default function App() {


  return (
    <div id='whole'>
      <Router>
        <div>
          <h2 id='welcome'>
            Welcome to Office In/Out.
          </h2>
          <nav className='navbar navbar-expand-lg navbar-light ng-light'>
            <ul className='navbar-nav mr-auto'>
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/signup'} className="nav-link">Sign Up</Link></li>
              <li><Link to={'https://cartenav.com/'} className="nav-link">Cartenav</Link></li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route exact path='/' Component ={Home}/>
            <Route exact path='/signup' Component ={Signup}/>
            <Route exact path='/firstTime' Component ={FirstTime}/>
            </Routes>
        </div>
      </Router>
    </div>
  );
}