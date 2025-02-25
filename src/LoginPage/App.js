// src/LoginPage/App.js
import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from "./login";
import "./components/global.css";
import Forgotpassword from "./components/forgotpassword";
import Register from "./components/Register";
import Profile from "./components/profile";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    // For simplicity, we'll just route to HomePage without any actual authentication
    if (username && password) {
      navigate('/home');
    } else {
      alert('Please enter your username and password');
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/register/:role" element={<Register />} />
        {/* <Route path="/Profile/:username" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default LoginPage;
