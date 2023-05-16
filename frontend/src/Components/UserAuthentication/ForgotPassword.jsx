import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {

    const handleForgotPassword = async (email) => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/request/password/', {
            email
          });
    
          if (response.status === 200) {
            console.log(response.data.message);
            toast.success("We have sent a link to your email successfully!")
          } else {
            console.log(response.data.error);
          }
        } catch (error) {
          console.log(error);
        }
      }

        return (
          <div className="forgot-password-page">
            <h2>Forgot Password</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              handleForgotPassword(email);
            }}>
              <input type="email" name="email" placeholder="Email address" required />
              <button type="submit">Reset Password</button>
            </form>
            <ToastContainer />
          </div>
        );
}

export default ForgotPassword