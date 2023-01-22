import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png"
const Navbar = () => {
  const loginDetail = localStorage.getItem("auth-token")
  
  return (
    <div className="nav-og">
      <ul className="nav" >
        <div className="logo">
          <img src={logo}></img><Link to="/"  id="name"> Stack UnderFlow</Link>
        </div>
        {loginDetail?
        <div><Link to ="/Profile"><button>Profile</button> </Link> <button onClick={()=>{localStorage.removeItem("auth-token")}}> Logout</button></div>: <div className="log-sign">
          <Link to="/login"><button>
            Login
          </button></Link>
          <Link to="/signup">
          <button>
            Sign up
          </button></Link>
        </div>}
      </ul>
    </div>
  );
};

export default Navbar;
