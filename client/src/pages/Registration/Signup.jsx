import React, { useState } from "react";
import "./Signup.css";
import { Link ,useNavigate } from "react-router-dom";
import axios from 'axios';
// import Swal from 'sweetalert2';




const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/signup', { username, email, password });
      console.log('User registered successfully');
      navigate('/'); // Navigate to home on successful signup
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      setError('Registration failed. Please try again.'); // Set error message
    }
  };

  
    // const alert = () => {
    //   if (handleSubmit) {
    //     Swal.fire({
    //       icon: "success",
    //       title: "signin successfully",
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    //   } else {
    //     Swal.fire({
    //       icon: "error",
    //       title: "please ckeck details",
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    //   }

    //   }

 

  
  return (
    <>
      <div className="login">
        <div className="login_img " ></div>
        <div className="login_page">
          <form action="" method="post"  onSubmit={handleSignup} >
            <h1>PLANTOSHO </h1>
            <h2>Create a new account</h2>
            <label htmlFor="">Name :</label>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="">Email :</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <br />
            <label htmlFor="">Password :</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="submit" value="Sign Up" />
            <div className="create">
              <p>Already have an account?</p>{" "}
              <Link className="loginLink" to="/login">
                {" "}
                Log in
              </Link>
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;