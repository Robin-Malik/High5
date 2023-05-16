import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const SideBar = () => {

  const [showUsersMenu, setShowUsersMenu] = useState(false); 
  const toggleUsersMenu = () => {
    setShowUsersMenu(!showUsersMenu);
}
      
  return (
    <div className='left-sidebar'>
    <ul>
     <li>
     <Link to="/">Home</Link>
     </li>
     <li>
     <Link to="/">My Rewards</Link>
     </li>
     <li>
     <Link to="/">My Team</Link>
     </li>
     <li>
     <Link to="/">Analytics</Link>
     </li>
     <li>
     <Link to="/">Campaigns</Link>
     </li>
     <li>
     <Link to="/">Survey</Link>
     </li>
     <div><p>Admin</p></div>
     <li>
        <div style={{color: "white", cursor: "pointer"}} onClick={toggleUsersMenu}>
        Users
        </div>
    </li>
    {showUsersMenu && (
        <ul className="users-menu">
          <li>
            <Link to="/company/users">Manage Users</Link>
          </li>
          <li>
            <Link to="/company/account">Earnings</Link>
          </li>
          <li>
            <Link to="/">Givings</Link>
          </li>
          <li>
            <Link to="/">Participations</Link>
          </li>
        </ul>
      )}
     
    </ul>
    <div className='side-links'>
       <a href="/faqs">FAQs</a>
       <a href="/feedback">feedback</a>
    </div>
    </div>
  )
}

export default SideBar