// frontend/src/components/Login-Signup/Signup.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // v5
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import { registerUser } from "./SignupFunctions";
 // correct import
import "./signup.css";

export default function Signup() {
  const history = useHistory(); // v5
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
  });

  const handleChangeEvent = (e, field) => {
    setNewUser({ ...newUser, [field]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(newUser);
      console.log("Backend Response:", response.data);
      alert("Registration successful!");
      history.push("/login"); // redirect after success
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.data.error) {
        alert(`Registration failed: ${error.response.data.error}`);
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  };

  const getToSignIn = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="row full">
          <div className="col-md-12">
            <div className="form-container">
              <div className="form-container-in"></div>
              <div className="row sgnUp">
                <div className="col-md-6 right-divider pdding">
                  <h3 className="lead-text mn-txt">Join Us with Social</h3>
                  <div className="icon-soc-fb"><FaFacebookF /></div>
                  <div className="icon-soc-tw"><FaTwitterSquare /></div>
                </div>

                <div className="left-divider col-md-6">
                  <form onSubmit={submitData}>
                    <div className="form-group2">
                      <label htmlFor="name">Name:</label>
                      <input
                        id="name"
                        type="text"
                        className="form-control sgnUp"
                        onChange={(e) => handleChangeEvent(e, "name")}
                        required
                      />
                    </div>
                    <div className="form-group2">
  <label htmlFor="username">Username:</label>
  <input
    id="username"
    type="text"
    className="form-control sgnUp"
    onChange={(e) => handleChangeEvent(e, "username")}
    required
  />
</div>


                    <div className="form-group2">
                      <label htmlFor="email">Email:</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control sgnUp"
                        onChange={(e) => handleChangeEvent(e, "email")}
                        required
                      />
                    </div>

                    <div className="form-group2">
                      <label htmlFor="mob-number">Mobile:</label>
                      <input
                        id="mob-number"
                        type="text"
                        className="form-control sgnUp"
                        onChange={(e) => handleChangeEvent(e, "mobile")}
                        required
                      />
                    </div>

                    <div className="form-check form-check-inline rd">
                      <input
                        type="radio"
                        id="Male"
                        name="gender"
                        value="Male"
                        className="form-check-input"
                        onChange={(e) => handleChangeEvent(e, "gender")}
                        required
                      />
                      <label htmlFor="Male">Male</label>
                    </div>

                    <div className="form-check form-check-inline rd">
                      <input
                        type="radio"
                        id="Female"
                        name="gender"
                        value="Female"
                        className="form-check-input"
                        onChange={(e) => handleChangeEvent(e, "gender")}
                        required
                      />
                      <label htmlFor="Female">Female</label>
                    </div>

                    <div className="form-group2">
                      <label htmlFor="password">Password:</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control sgnUp"
                        onChange={(e) => handleChangeEvent(e, "password")}
                        required
                      />
                    </div>

                    <div className="form-group2">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn-primary btnn form-submit sub-btn sgnUp"
                      />
                    </div>

                    <div>
                      <small className="form-text text-muted link-text">
                        Already a User?
                      </small>
                      <span className="signuptext">
                        <a href="/#" onClick={getToSignIn}>
                          Sign-In
                        </a>
                      </span>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
