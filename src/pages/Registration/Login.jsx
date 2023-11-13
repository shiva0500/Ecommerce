import React, { useState, useEffect } from "react";
import image1 from "../../assets/L1.jpeg"; // Import your images
import image2 from "../../assets/L2.jpeg";
import image3 from "../../assets/L3.jpeg";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword   } from "firebase/auth";
import { auth } from "../../firebase";


const backgroundImages = [image1, image2, image3];

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitbtndisable, setsubmitbtndisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !values.email || !values.pass) {
      setErrorMsg("Please enter details");
      return;
    }
    setErrorMsg("");

    setsubmitbtndisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then( async(res) => {
        setsubmitbtndisable(false);
      
       navigate("/")
      })
      
      .catch((err) =>{
        setsubmitbtndisable(false);
        setErrorMsg(err.message);
        console.log("Error", err);
      } )
  };


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
            <input type="email" name="email" id="email" placeholder="Enter you email"   onChange={(e) =>setValues((prev) => ({...prev , email:e.target.value}))} />
            <br />
            <label htmlFor="">Password :</label>
            <input type="password" name="password" id="password" placeholder=" Enter your password"   onChange={(e) =>setValues((prev) => ({...prev , pass:e.target.value}))} />
            <br />
            <input type="submit" value="Login" disabled={submitbtndisable} onClick={handleSubmit} />
            <br />
            <div className="create">
            <p>Don't have an account?</p> <Link className="loginLink" to="/Signup" >Sign up</Link>
              <br />
              <p>{errorMsg}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
