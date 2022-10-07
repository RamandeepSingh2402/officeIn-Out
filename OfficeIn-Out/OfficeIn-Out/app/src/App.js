import {React, useState, Component} from 'react';
import Signup from './components/Signup';
import FirstTime from './components/FirstTime';
import Home from './components/Home';
import {Route, Router, BrowserRouter, Link} from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';


export default function App() {


  return (
    <div id='whole'>
      <BrowserRouter>
        <div>
          <h2 id='welcome'>
            Welcome to Office In/Out.
          </h2>
          <nav className='navbar navbar-expand-lg navbar-light ng-light'>
            <ul className='navbar-nav mr-auto'>
              <li><a href='/home' className="nav-link">Home</a></li>
              <li><a href='http://localhost:3000/signup.js' className="nav-link">Sign Up</a></li>
              <li><a href='https://cartenav.com/' className="nav-link">Cartenav</a></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/home'> <Home /> </Route>
            <Route exact path='/signup'> <Signup /></Route>
            <Route exact path='/firstTime'> <FirstTime /> </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </div>
  );
}