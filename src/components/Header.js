import React, { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState();
  return (
    <div className="header">
      <div className="logo-container ">
        <img className="w-10" src={LOGO_IMG} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 bg-blue-500 text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="contactus">Contact us</Link>
          </li>
          <li className="px-4">Cart</li>
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
