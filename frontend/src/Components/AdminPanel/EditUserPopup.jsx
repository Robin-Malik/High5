import React, {useState} from 'react';
import ShowModal from './ShowModal';
import axios from 'axios';
import Cookies from 'js-cookie';

const EditUserPopup = ({user, onClose, toast}) => {

  const [showModal, setShowModal] = useState(true);

  const token = Cookies.get('token')

  const closeModal = () => {
    setShowModal(false);
    onClose();
  }

  const [formData, setFormData] = useState({
    firstName: user.user.first_name,
    lastName:  user.user.last_name,
    email: user.user.email,
    country: user.country,
    department: user.department,
    location: user.location,
    userMode: user.user_mode,
    allowanceBoost: user.allowance_boost,
    role: user.role,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response =  await axios.put(`http://127.0.0.1:8000/update/${user.id}/`, formData, {
        headers: {
        Authorization: `Bearer ${token}`
        }})

      if (response.status === 200) {
        toast.success("User Edited Successfully!")
        setTimeout(() => {
            window.location.reload();
        }, 1000)
        
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
        console.log(error);
      }
    closeModal();
  };

  const mainModal = (
    <ShowModal closeModal={closeModal}>
    <div>
        <h3>Edit User</h3>
        <form onSubmit={submitHandler}>

          <label>Email:</label>
          <input type="text" name='email'  value={formData.email}  disabled />

          <label>First Name:</label>
          <input type="text" name='firstName' value={formData.firstName}  disabled/>

          <label>Last Name:</label>
          <input type="text" name='lastName' value={formData.lastName}  disabled/>

          <label>Role:</label>
          <input type="text" name='role' value={formData.role} onChange={handleChange}/>

          <label>Country:</label>
          <input type="text" name='country' value={formData.country} onChange={handleChange}/>

          <label htmlFor="department">Department</label>
          <input type="text" name="department"  value={formData.department} onChange={handleChange} required />
    
          <label htmlFor="location">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
    
          <label htmlFor="userMode">User Mode</label>
          <select  name="userMode" value={formData.userMode} onChange={handleChange}>
            <option value="normal">normal</option>
            <option value="benefactor">benefactor</option>
            <option value="receiver">receiver</option>
            <option value="observer">observer</option>
          </select>

          <label>Allowance Boost:</label>
          <input type="number" name='allowanceBoost' value={formData.allowanceBoost} onChange={handleChange}/>
          
          <button type="submit">Save</button>
        </form>
      </div>
   
    </ShowModal>
  )

  return (
    <div>
      {showModal && mainModal} 
    </div>    
    
  )
}


export default EditUserPopup