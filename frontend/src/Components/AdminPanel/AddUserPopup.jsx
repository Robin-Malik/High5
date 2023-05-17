import React, { useState } from "react";
import ShowModal from "./ShowModal";
// import './Modal.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserPopup = () => {
  const [showModal, setShowModal] = useState(false);

  
  const token = Cookies.get('token')

  const closeModal = () => setShowModal(false);

  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
      // phoneNumber: '',
      // managerEmail: '',
      // hiredOn: '',
      // dateOfBirth: '',
      // department: '',
      // location: '',
      // userMode: '',
      // allowanceBoost: '',
      // role: '',
      // avatar: '',
    });
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "avatar" && files.length > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: reader.result
          }));
        };
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      }
    };
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response =  await axios.post(`http://127.0.0.1:8000register/`, formData, {
          headers: {
          Authorization: `Bearer ${token}`
          }})
  
        if (response.status === 200) {
          toast.success("User Added Successfully!")
          setTimeout(() => {
            window.location.reload();
        }, 3000)
          
        } else {
          console.log(response.data.error);
        }
      } catch (error) {
          console.log(error);
        }
      closeModal();


      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
      });
    };

  const mainModal = (
    <ShowModal closeModal={closeModal} >

      <h3 class="text-center">
        Add User
        <span class="block w-30rem h-2 my-2 mx-auto bg-black"></span>
      </h3>  

      <div class="max-w-2xl h-600 mx-auto overflow-auto top-2vh scrollbar-none">
      <form onSubmit={handleSubmit}>

      <div className="flex items-center mb-4">
      <label  className="inline-block w-24 mr-4 mb-6" htmlFor="firstName">First Name</label>
      <input class="inline-block w-full p-1 rounded-md border border-gray-300 text-base box-border mb-4" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}  required />
      </div>

      <div className="flex items-center mb-4">
      <label class="inline-block w-24 mr-4 mb-6" htmlFor="lastName">Last Name</label>
      <input class="inline-block w-full p-1 rounded-md border border-gray-300 text-base box-border mb-4" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}  required />
      </div>

      <div className="flex items-center mb-4">
      <label class="inline-block w-24 mr-4 mb-6" htmlFor="username">Username</label>
      <input class="inline-block w-full p-1 rounded-md border border-gray-300 text-base box-border mb-4" type="text" id="username" name="username" value={formData.username} onChange={handleChange}  required />
      </div>

      <div className="flex items-center mb-4">
      <label class="inline-block w-24 mr-4 mb-6" htmlFor="email">Email</label>
      <input class="inline-block w-full p-1 rounded-md border border-gray-300 text-base box-border mb-4" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="flex items-center mb-4">
      <label class="inline-block w-24 mr-4 mb-6" htmlFor="password">Password</label>
      <input class="inline-block w-full p-1 rounded-md border border-gray-300 text-base box-border mb-4" type="text" id="password" name="password" value={formData.password} onChange={handleChange}  required />
      </div>
      
      <div  class="flex justify-center items-center flex-wrap gap-4 mt-5">
      <button class="bg-blue-500 text-white border-none py-2 px-4 rounded-md text-base cursor-pointer" className="cancel-button" onClick={closeModal}>Cancel</button>
      <button class="bg-blue-500 text-white border-none py-2 px-4 rounded-md text-base cursor-pointer" type="submit">Save</button>
      </div>

    </form>
    <ToastContainer/>
      </div>
    </ShowModal>
  );

  return (
    <div>
      <button class="px-3 py-1.5 text-lg rounded-md bg-blue-500 text-white cursor-pointer transform scale-90 no-underline" onClick={() => setShowModal(true)}>
        Add User
      </button>
      {showModal && mainModal}    
    </div>
  );
};

export default AddUserPopup;


// <label htmlFor="phoneNumber">Phone No</label>
//       <input type="Number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

//       <div className="form-group">
//       <label htmlFor="managerEmail">Manager Email</label>
//       <input type="email" id="managerEmail" name="managerEmail" value={formData.managerEmail} onChange={handleChange} />
//       </div>

//       <label htmlFor="hiredOn">Hired On</label>
//       <input type="date" id="hiredOn" name="hiredOn" value={formData.hiredOn} onChange={handleChange} />

//       <label htmlFor="dateOfBirth">Date of Birth</label>
//       <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}/>

//       <label htmlFor="department">Department</label>
//       <input type="text" id="department" name="department"  value={formData.department} onChange={handleChange} required />

//       <label htmlFor="location">Location</label>
//       <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />

//       <label htmlFor="userMode">User Mode</label>
//       <select id="userMode" name="userMode" value={formData.userMode} onChange={handleChange}>
//         <option value="normal">normal</option>
//         <option value="benefactor">benefactor</option>
//         <option value="receiver">receiver</option>
//         <option value="observer">observer</option>
//       </select>
    
//       <div className="form-group">
//       <label htmlFor="allowanceBoost">Allowance Boost</label>
//       <input type="number" id="allowanceBoost" name="allowanceBoost" value={formData.allowanceBoost} onChange={handleChange} />
//       </div>
    
//       <label htmlFor="role">Role</label>
//       <input type="text" id="role" name="role" value={formData.role} onChange={handleChange}/>
    
//       <label htmlFor="avatar">Avatar</label>
//       <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleChange} />
