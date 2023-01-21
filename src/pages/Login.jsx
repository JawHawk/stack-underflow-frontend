import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <form className="form">
        <h1>Login In</h1>
        Roll No. : <input type="text" className="input" />
        
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
