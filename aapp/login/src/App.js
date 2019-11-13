import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import {withRouter} from 'react-router'
import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Route path="/Register" component={Register} />
     <Route path="/Login" component={Login} />
     <Route path="/Users" component={Users} />

    </div>
  );
}

export default App;
