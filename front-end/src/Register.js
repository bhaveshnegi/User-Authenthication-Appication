import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [registerData,setRegisterData]= useState({
    username:'',
    password:''
  })
  const handleRegisterChange=(e)=>{
    const {name,value} = e.target;
    setRegisterData((preData)=>({
      ...preData,
      [name]:value,
    }))
  }

  const handleRegisterSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register',registerData);
      console.log(response.data);
    } 
    catch (error) {
      console.log(error);
    }
    setRegisterData({
      username:'',
      password:'',
    })
  }
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegisterSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={registerData.username} onChange={handleRegisterChange} placeholder="Choose a username" required />
        <label>Password</label>
        <input type="password" name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Create a password" required />
        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  )  
}

export default Register
