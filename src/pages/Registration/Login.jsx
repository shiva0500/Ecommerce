import React, { useState, useEffect } from "react";
import image1 from "../../assets/L1.jpeg"; // Import your images
import image2 from "../../assets/L2.jpeg";
import image3 from "../../assets/L3.jpeg";
import "./Login.css";
import { Link } from "react-router-dom";


const backgroundImages = [image1, image2, image3];

const Login = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBackgroundImageIndex(randomIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const loginStyle = {
    backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
  };
  return (
    <>
      <div className="login">
        <div className="login_img " style={loginStyle}></div>
        <div className="login_page">
          <form action="">
          <h1>PLANTOSHO </h1>
           
            <h2>Login your account</h2>
            <p>welcome back!</p>
            <label htmlFor="">Email :</label>
            <input type="email" name="email" id="email" placeholder="Enter you email" />
            <br />
            <label htmlFor="">Password :</label>
            <input type="password" name="password" id="password" placeholder=" Enter your password" />
            <br />
            <input type="submit" value="Login" />
            <br />
            <div className="create">
            <p>Don't have an account?</p> <Link className="loginLink" to="/Signup" >Sign up</Link>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
