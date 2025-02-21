// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import WelcomePage from './WelcomePage/App';
// import LoginPage from './LoginPage/App';
// import HomePage from './HomePage/App';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WelcomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/home" element={<HomePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage/components/Home";
import Login from "./LoginPage/components/login";
import WelcomePage from "./WelcomePage/WelcomePage";
import Register from "./LoginPage/components/Register";
import Forgotpassword from "./LoginPage/components/forgotpassword";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
