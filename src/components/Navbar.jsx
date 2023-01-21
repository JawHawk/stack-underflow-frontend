import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png"
const Navbar = () => {
  return (
    <div className="nav-og">
      <ul className="nav" >
        <div className="logo">
          <img src={logo}></img><Link to="/"  id="name"> Stack UnderFlow</Link>
        </div>
        <div className="log-sign">
          <button className="button-">
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
