import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const loginDetail = localStorage.getItem("auth-token");
  const handleClick = () => {
    localStorage.removeItem("auth-token");
    navigate("/login");
  };
  return (
    <div className="nav-og">
      <ul className="nav">
        <div className="logo">
          <img src={logo}></img>
          <Link to="/" id="name">
            {" "}
            Stack UnderFlow
          </Link>
        </div>
        <div>{/* <button className="menu" >Menu</button> */}</div>
        {loginDetail ? (
          <div className="log-sign">
            <Link to="/Profile">
              <button>Profile</button>{" "}
            </Link>{" "}
            <button onClick={handleClick}> Logout</button>
          </div>
        ) : (
          <div className="log-sign">
            {/* <button>hello</button> */}
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
