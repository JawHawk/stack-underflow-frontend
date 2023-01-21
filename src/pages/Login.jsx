import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function login() {
    console.log(email);
  }
  return (

    <div>
      <Navbar></Navbar>
      <form className="form">
        <Link to="/"><button className="close">Close</button></Link>
        <h1>LogIn</h1>
        Email : <input type="text" placeholder="Enter your Email" className="input" onChange={(e) => setEmail( e.target.value)} />

        <br />
        <br />
        Password : <input type="password" placeholder="Enter your Password" className="input" onChange={(e) => setPassword(e.target.value)} />
        <br />

        <button onClick={login}>submit</button>
      </form>
    </div>
  );
};

export default Login;
