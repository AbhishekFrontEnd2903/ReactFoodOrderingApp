import React, { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_IMG} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contactus">Contact us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
