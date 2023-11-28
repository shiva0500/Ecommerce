import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import c1 from "../../assets/bg-2.jpg";
import "./User.css"
// import Swal from 'sweetalert2';

const User = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      // Make a GET request to the user data route on your Express.js server
      const response = await fetch(`http://localhost:5000/userdata/:email`);
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        console.error('Failed to fetch user data');
      }
    };

    
      fetchUserData();
    
  }, []);
  const handleSignOut = () => {
    // Simulate sign-out logic or clear user data in the frontend
    user(null);
  };


  return (
    <>
      <div className='user_page'>
        { user ?  (
          <div className='user_page' >
            <img className='user_img' src={c1} alt='user background' />
            <h2 className='user_name'>Name: {user.username}</h2>
          <h2 className='user_email'>Email: {user.email}</h2>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          navigate("/login")
        )}
      </div>
    </>
  );
};

export default User;