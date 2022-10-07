import {React, useState, Component} from 'react';
import Signup from './components/Signup/Signup';
import FirstTime from './components/FirstTime';
import Home from './components/Home/Home';
import {Route, Router, BrowserRouter, Link} from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import EmployeeSelection from './components/EmployeeSelection/EmployeeSelection'

export default function App() {

  return (
    <div id='whole'>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/home'> <Home /> </Route>
            <Route exact path='/signup'> <Signup /></Route>
            <Route exact path='/firstTime'> <FirstTime /> </Route>
            <Route path="/employee"> <EmployeeSelection emailId = "rs"/> </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </div>
  );
}