import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase"; // Import the Firebase auth object
import c1 from "../../assets/bg-2.jpg";
import "./User.css"
const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const notify = () => toast.success('Signed Out successfully!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        notify();
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <>
      <div className='user_page'>
        {user ? (
          <div className='user_page' >
            <img className='user_img' src={c1} alt="/" />
            <h2 className="user_name" >name: {user.displayName}!</h2>
            <h2 className="user_email"  >email : {user.email}</h2>
            <button onClick={handleSignOut} >Sign Out</button>
          </div>
        ) : (
          navigate("/login")
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default User;