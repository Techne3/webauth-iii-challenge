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
            <div className="container">
                <div className='row'>
            {user.length > 0 && user.map(use => {
                return (
                        <div className="col s4">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-title">{use.username}</div>
               
                                        {/* <div>{use.password}</div> */}
                                </div>
                           </div>
                       </div>
                )
            })}
            </div>
        </div>
     </div>
    );
}

export default Users;