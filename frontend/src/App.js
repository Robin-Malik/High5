import Login from './Components/UserAuthentication/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './Components/UserAuthentication/ForgotPassword';
import ResetPassword from './Components/UserAuthentication/ResetPassword';
import HomePage from './Components/HomePage';
import ManageUsers from './Components/AdminPanel/ManageUsers';
import Earnings from './Components/AdminPanel/Earnings';

function App() {
  return (   
    <div>  
      <Router> 
        <Routes>
          <Route path='/' element= {<Login/>}/>
          <Route path='/homepage' element= {<HomePage/>}/>
          <Route path='/company/users' element={<ManageUsers/>}/>
          <Route path='/company/account' element={<Earnings/>}/>
          <Route path='/forgot/password' element= {<ForgotPassword/>}/>
          <Route path='/reset/password/passwordreset/:uidb64/:token' element= {<ResetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
