import React from 'react';
import { useNavigate } from "react-router-dom";
import c1 from "../../assets/bg-2.jpg";
import "./User.css"
// import Swal from 'sweetalert2';

const User = () => {

  const navigate = useNavigate();
 

  return (
    <>
      <div className='user_page'>
        { (
          <div className='user_page' >
            <img className='user_img' src={c1} alt="/" />
            <h2 className="user_name" >name: !</h2>
            <h2 className="user_email"  >email </h2>
            <button   >Sign Out</button>
          </div>
        )  (
          navigate("/login")
        )}
      </div>
    </>
  );
};

export default User;