import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const navigate = useNavigate();

    const {uidb64, token} = useParams();

    const handleSubmit = async (password, token, uidb) => {
        try {
          const response = await axios.patch('https://18.236.91.253/passwordreset/complete', {
            password, token, uidb64
          });
    
          if (response.status === 200) {
            console.log(response.data.message);
            toast.success("Password changed successfully!");
            setTimeout(() => {
                navigate('/')
            }, 2000)
          } else {
            console.log(response.data.error);
          }
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div>
    <div className="forgot-password-page">
    <h2>Forgot Password</h2>
    <form onSubmit={(e) => {
      e.preventDefault();
      const newPassword = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      if(newPassword === confirmPassword) {
        const password = newPassword;
        handleSubmit(password, token, uidb64);
      } else {
        console.log('Password does not match')
      }
     
    }}>
      <input type="password" name="password" placeholder="New Password" required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
      <button type="submit">Reset Password</button>
    </form>
    <ToastContainer />
  </div>
    </div>
  )
}

export default ResetPassword