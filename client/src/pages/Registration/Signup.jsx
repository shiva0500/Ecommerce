import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';




const Signup = () => {


  
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
          <form action="">
            <h1>PLANTOSHO </h1>
            <h2>Create a new account</h2>
            <label htmlFor="">Name :</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter you name"

            
            />
            {/* <label htmlFor="">Username :</label>
            <input type="text" name="username" id="username"  placeholder="Enter you username"  /> */}
            <label htmlFor="">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter you email"
            
            />
            <br />
            <label htmlFor="">Password :</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder=" Enter your password"
             
            />
            <br />
            <input
              type="submit"
              value="SignUP"
            />
            <br />
            <button  >google</button>
            <div className="create">
              <p>Already have an account?</p>{" "}
              <Link className="loginLink" to="/login">
                {" "}
                Log in
              </Link>
            </div>
            <b className="firebaseError"  >k</b>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;