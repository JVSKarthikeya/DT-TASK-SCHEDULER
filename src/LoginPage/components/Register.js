import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    roles: ["User"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    if (!formData.Username.trim()) {
      newErrors.Username = "Username is required";
      formIsValid = false;
    } else if (formIsValid && formData.Username.includes(" ")) {
      newErrors.Username = "Username should not contain spaces";
      formIsValid = false;
    } else {
      newErrors.Username = "";
    }

    if (formIsValid && !formData.Email.trim()) {
      newErrors.Email = "Email is required";
      formIsValid = false;
    } else {
      newErrors.Email = "";
    }

    if (formIsValid && !formData.Password.trim()) {
      newErrors.Password = "Password is required";
      formIsValid = false;
    } else {
      newErrors.Password = "";
    }

    if (!formIsValid) {
      console.log("Form is not valid:", newErrors);
      return;
    }

    // Save user details to localStorage
    localStorage.setItem("username", formData.Username);
    localStorage.setItem("email", formData.Email);
    localStorage.setItem("password", formData.Password);

    // Redirect to the login page after successful registration
    setMessage(`Registration Successful`);
    navigate("/");
  };

  return (
    <div className="flex py-20 px-40 gap-4" style={{ fontFamily: "Gill Sans" }}>
      <div className="container mx-auto my-5 p-8 border border-gray-300 shadow-md rounded-lg bg-white">
        <div className="header">
          <div className="text">Create Account</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="registerbtn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;