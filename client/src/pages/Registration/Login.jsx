import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";




const Login = () => {


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
          <form action="">
          <h1>PLANTOSHO </h1>
           
            <h2>Login your account</h2>
            <p>welcome back!</p>
            <label htmlFor="">Email :</label>
            <input type="email" name="email" id="email" placeholder="Enter you email"    />
            <br />
            <label htmlFor="">Password :</label>
            <input type="password" name="password" id="password" placeholder=" Enter your password"    />
            <br />
            <input type="submit" value="Login"  />
            <br />
            <div className="create">
            <p>Don't have an account?</p> <Link className="loginLink" to="/Signup" >Sign up</Link>
              <br />
              <p className="firebaseError"  ></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
