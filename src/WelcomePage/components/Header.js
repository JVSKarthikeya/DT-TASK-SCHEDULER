import React from "react";
import "./Header.css";
import Dtlogo from "../assets/images/DtLogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Dtlogo} alt="Logo" className="logo" />
        {/* <div className="title">TASK ScheduER</div> */}
      </div>
      <div className="header-right">
        <Link to="/login" className="auth-button">
          Login
        </Link>
        <Link to="/Register" className="auth-button">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
