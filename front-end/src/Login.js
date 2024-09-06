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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type='text' name='username' placeholder='username' value={logindata.username}required onChange={handleLoginChange}/>
        <input type='password' name='password' placeholder='Password' value={logindata.password}required onChange={handleLoginChange}/>
        <button type='submit'>Login</button>
        <p>
            Not register yet?
            <Link to ='/register'>Register here </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
