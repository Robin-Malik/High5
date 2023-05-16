import React, { useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Link, Navigate } from 'react-router-dom';


const Login = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLogin = async (event) => {
    event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        email,
        password
      });

     

      if (response.status === 200) {
        setLoggedIn(true);
        Cookies.set('token', response.data.token);   
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
      event.target.email.value = ""
      event.target.password.value =""
    }
  }

 

  if (loggedIn) {
    return <Navigate to="/homepage" />;
  }

  return (
    <div className="login-page">
      <div className="form" >
        <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
          <input type="email" autoComplete="off" name="email" placeholder="Email address" required />
          <input type="password" autoComplete="off" name="password" placeholder="Password" required />
          <p><Link to= '/forgot/password'>Forgot Password?</Link></p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
