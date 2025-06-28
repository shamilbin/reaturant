import React from "react";
import logo from "../assets/rest.jpg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo image" />
        </div>

        <div className="nav-container ">
          <div className="nav-items">
            <ul>
              <li>Home</li>

              <li>About</li>
              <li>Contact </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
