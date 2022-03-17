import React from "react";
import ImgSignup from "../../Images/ImgSignup.svg";
import "./Signup.css";
import SignupDetails from "./SignupDetails";

const Signup = () => {
  return (
    <div className="container  ">
      <div className="row">
        <div className="col-md-5">
          <SignupDetails />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid signup_img " src={ImgSignup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
