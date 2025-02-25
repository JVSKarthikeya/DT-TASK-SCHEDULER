// src/WelcomePage/App.js
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <Header />
      {/* <h1>Welcome to the Task Scheduler App</h1>
      <Link to="/login">Login/Signup</Link> */}
      <Body />
    </div>
  );
}

export default WelcomePage;
