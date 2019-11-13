import React, {useState} from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function Logout(props) {

    const [user, setUser] = useState({
      username: "",
      password: "",
    })


    const logout = e => {
        e.preventDefault();
        // const {username, password} = user;
        axiosWithAuth()
        .post('/auth/logout', user)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', null);
            props.history.push('/login')
        })
        .catch(err => {
        })
    }



  return (

    <button 
        onClick={logout}
        > Sign Out</button>

        );

  }


export default Logout;
