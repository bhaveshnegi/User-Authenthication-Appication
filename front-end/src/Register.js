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
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegisterSubmit}>
        <label>Username:</label>
        <input type='text' name='username' placeholder='enter username' value={registerData.username} onChange={handleRegisterChange} required/>
        <label>Password:</label>
        <input type='password' name='password' placeholder='enter password' value={registerData.password} onChange={handleRegisterChange} required/>
        <button type='submit'>Register</button>
        <p>Already Register
          <Link to='/login'>Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
