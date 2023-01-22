import React from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleChange(e) {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }
  const login = (e) => {
    e.preventDefault();
    fetch(
      "https://stackunderflowbackend.onrender.com/v1/loggedin/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    ).then(response => {
      if(response.ok){ return response.json()}
      alert('Wrong Credentials')
      throw new Error('Wrong Credentials')
    })
    .then(data => {
      setEmail("");
      setPassword("");
      localStorage.setItem("auth-token", data.authtoken);
      navigate("/dashboard");
    })
  };
  return (
    <div>
      <form className="form" onSubmit={login}>
        <Link to="/">
          <button className="close">Close</button>
        </Link>
        <h1>LogIn</h1>
        Email :{" "}
        <input
          type="text"
          placeholder="Enter your Email"
          className="input"
          name="email"
          onChange={handleChange}
        />
        <br />
        <br />
        Password :{" "}
        <input
          type="password"
          placeholder="Enter your Password"
          className="input"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Login;
