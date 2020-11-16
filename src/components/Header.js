import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="dropdown navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
