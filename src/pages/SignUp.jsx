import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/Spinner";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  function handleChange(e) {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await fetch("http://localhost:5000/v1/signup/createuser", {
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({name : name, email : email, password: password})
      })
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div>
    {loading && <Spinner/>}
      <form className="form" onSubmit={handleSubmit}>
        <Link to="/">
          <button className="close">Close</button>
        </Link>
        <h1>SignIn</h1>
        Name :
        <input
          type="text"
          placeholder="Enter your Name"
          className="input"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br />
        Email :
        <input
          type="text"
          placeholder="Enter your Email"
          className="input"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <br />
        Password :
        <input
          type="password"
          placeholder="Enter your Password"
          className="input"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <Footer/>
    </div>
  );
};

export default SignUp;
