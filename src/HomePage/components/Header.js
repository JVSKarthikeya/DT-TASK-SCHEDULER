import React, { useState } from 'react';
import './Header.css';
import Dlogo from '../assets/images/Dlogo.png';
import { FaUser, FaQuestionCircle } from 'react-icons/fa';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <img src={Dlogo} alt="Logo" className="logo" />
      <div className="icons">
        <FaQuestionCircle className="icon" />
        <div className="user-menu" onClick={toggleDropdown}>
          <FaUser className="icon" />
          {dropdownVisible && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
