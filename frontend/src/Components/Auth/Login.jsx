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
      const response = await axios.post('http://18.236.91.253/login/', {
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
    <div className="flex justify-end items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow p-8 w-80 h-auto mr-8" >
        <form className="space-y-4" autoComplete="off" onSubmit={handleLogin}>
          <input
            type="email"
            autoComplete="off"
            name="email" 
            placeholder="Email address" 
            required 
            className="border-b-2 border-gray-300 px-4 py-2 w-full focus:outline-none placeholder-opacity-50"/>

          <input 
            type="password" 
            autoComplete="off" 
            name="password" 
            placeholder="Password" 
            required 
            className="border-b-2 border-gray-300 px-4 py-2 w-full focus:outline-none placeholder-opacity-50"/>

        <div className="flex justify-end">
            <span className="text-sm text-blue-500">
              <Link to="/forgot/password">Forgot Password?</Link>
            </span>
        </div>
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg">
            Login
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
