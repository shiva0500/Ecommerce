import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Import the Firebase auth object
import c1 from "../../assets/bg-2.jpg";
import "./User.css"
import Swal from 'sweetalert2';

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

const alert = () => {
  if (handleSignOut) {
    Swal.fire({
      icon: "success",
      title: "signout successfully",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "signout successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

}

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
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
            <button  onClick={() => { handleSignOut(); alert();}} >Sign Out</button>
          </div>
        ) : (
          navigate("/login")
        )}
      </div>
    </>
  );
};

export default User;