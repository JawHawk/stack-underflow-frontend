import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <form className="form">
        <h1>Welcome to Stack Underflow</h1>
        username : <input type="text" className="input" />
        
        <br />
        
        Password : <input type="text" className="input" />
        <br/>
        

        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
