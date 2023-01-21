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
  const login=async(e)=> {
    e.preventDefault()
    const response = await fetch("https://stackunderflowbackend.onrender.com/v1/loggedin/login", {
      method: "POST",
      headers :{
        "content-type": "application/json"
      },
      body : JSON.stringify({email: email, password: password})
    })
    
    const data = await response.json()
    localStorage.setItem("auth-token", data.authtoken)
    
  }
  return (

    <div>
      <Navbar></Navbar>
      <form className="form" onSubmit={login}>
        <Link to="/" ><button className="close">Close</button></Link>
        <h1>LogIn</h1>
        Email : <input type="text" placeholder="Enter your Email" className="input" name="email" onChange={handleChange}/>

        <br />
        <br />
        Password : <input type="password" placeholder="Enter your Password" className="input" name="password" onChange={handleChange} />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
