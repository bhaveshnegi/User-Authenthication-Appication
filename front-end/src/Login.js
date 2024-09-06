import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [logindata,setLoginData]=useState({
        username:'',
        password:'',
    })

    const handleLoginChange=(e)=>{
        const {name,value} = e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleLoginSubmit=async(e)=>{
        e.preventDefault();

        try{
          const response = await axios.post('http://localhost:8000/login',logindata);
          const {success,message}=response.data;
          if(success){
            console.log('Login')
          }
          else{
            console.log(message)
          }
        }
        catch (error){
          console.log('Login Error',error);
        }
        setLoginData({
          username:'',
          password:'',
        })
    }
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={logindata.username} onChange={handleLoginChange} placeholder="Enter username" required />
          <label>Password</label>
          <input type="password" name="password" value={logindata.password} onChange={handleLoginChange} placeholder="Enter password" required />
          <button type="submit">Login</button>
          <p>
            Not registered yet? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    )    
}

export default Login
