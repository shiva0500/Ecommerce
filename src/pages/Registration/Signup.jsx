import React, { useState, useEffect } from "react";
import image1 from "../../assets/L1.jpeg"; // Import your images
import image2 from "../../assets/L2.jpeg";
import image3 from "../../assets/L3.jpeg";
import "./Signup.css";
import { Link,useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from "../../firebase";


const backgroundImages = [image1, image2, image3];

const Signup = () => {
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
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please enter details");
      return;
    }
    setErrorMsg("");

    setsubmitbtndisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then( async(res) => {
        setsubmitbtndisable(false);
        const user = res.user;
      await  updateProfile(user,{
          displayName: values.name
        });
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
            <h2>Create a new account</h2>
            <label htmlFor="">Name :</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter you name"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            {/* <label htmlFor="">Username :</label>
            <input type="text" name="username" id="username"  placeholder="Enter you username"  /> */}
            <label htmlFor="">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter you email"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <br />
            <label htmlFor="">Password :</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder=" Enter your password"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, pass: e.target.value }))
              }
            />
            <br />
            <input
              type="submit"
              value="SignUP"
              onClick={handleSubmit}
              disabled={submitbtndisable}
            />
            <br />
            <div className="create">
              <p>Already have an account?</p>{" "}
              <Link className="loginLink" to="/login">
                {" "}
                Log in
              </Link>
            </div>
            <b>{errorMsg}</b>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
