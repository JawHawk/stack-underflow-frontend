import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

function handleChange(e){
  e.preventDefault();
  if(e.target.name === "email"){
    setEmail(e.target.value)
  }
  else{
    setPassword(e.target.value)
  }

}
  function login(e) {
    e.preventDefault()
    console.log(email,password);
    
  }
  return (

    <div>
      <Navbar></Navbar>
      <form className="form">
        <Link to="/"><button className="close">Close</button></Link>
        <h1>LogIn</h1>
        Email : <input type="text" placeholder="Enter your Email" className="input" name="email" onChange={handleChange}/>

        <br />
        <br />
        Password : <input type="password" placeholder="Enter your Password" className="input" name="password" onChange={handleChange} />
        <br />

        <button onClick={login}>submit</button>
      </form>
    </div>
  );
};

export default Login;
