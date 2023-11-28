import React, { useState } from "react";
import "./Login.css";
import { Link ,useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import axios from 'axios';




const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login successful', response.data.user);
      localStorage.setItem('user' , email );
      navigate('/'); // Navigate to home on successful login
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      setError('Invalid credentials. Please try again.'); // Set error message
    }
  };
  // const alert = () => {
  //     Swal.fire({
  //       icon: "error",
  //       title: "please ckeck details",
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //   }

  return (
    <>
      <div className="login">
        <div className="login_img ">
        </div>
        <div className="login_page">
          <form onSubmit={handleLogin} method="post" action="">
          <h1>PLANTOSHO </h1>
           
            <h2>Login your account</h2>
            <p>welcome back!</p>
            <label >Email :</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="">Password :</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="submit" value="Login"/>
            <br />
            <div className="create">
            <p>Don't have an account?</p> <Link className="loginLink" to="/Signup" >Sign up</Link>
            {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
