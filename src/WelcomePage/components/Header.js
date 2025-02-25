import React from "react";
import "./Header.css";
import Dtlogo from "../assets/images/DtLogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Dtlogo} alt="Logo" className="logo" />
        {/* <div className="title">TASK ScheduER</div> */}
      </div>
      <div className="header-right">
        <button className="auth-button">Login</button>
        <button className="auth-button">Register</button>
      </div>
    </header>
  );
};

export default Header;