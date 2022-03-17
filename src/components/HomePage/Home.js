import React, { useState } from "react";
import "./Home.css";
import { useSelector } from "react-redux";


const Home = () => {
  const state = useSelector((state) => state.userReducer);
  const { user } = state;
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(user.file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      {preview ? (
        <div className="container ">
          <div className="Card">
            <div className="upper-container">
              <div className="image-container">
                <img
                  src={preview}
                  alt="main_pic"
                  height="100px"
                  width="100px"
                />
              </div>
            </div>
            <div className="lower-container">
              <h1>WELCOME</h1>
              <h3>Hello: {user.name}</h3>
              <h4>Email Id: {user.email}</h4>
              <h5>Phone Number: {user.phoneNo}</h5>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Home;
