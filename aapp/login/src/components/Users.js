import React,{useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Users = () => {
    const [user, setUser]=useState([])

    const getUsers = () => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
        .catch(error => {
           console.log(error)
        })
    }
          

    return (
        <div>
            <h1>You have Logged in Successfully</h1>
            <button onClick={getUsers}  className="waves-effect waves-light btn">get users</button>
            {user.length > 0 && user.map(use => {
                return (
                    <>
                    <h2 key={use.id}>username: {use.username}</h2>
                {/* <h3>password: {use.password}</h3> */}
                </>
                )
            })}
        </div>
    );
}

export default Users;