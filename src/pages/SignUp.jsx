import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Navbar></Navbar>

      <form className="form">
        <Link to="/"><button className="close">Close</button></Link>
        <h1>SignUp</h1>
        <h4>Name : <input type="text" className="input" /></h4>
        <h4>
          Email : <input type="text" className="input" />
        </h4>
       
        <h4>Password : <input type="text" className="input" /></h4>
        
        
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignUp;
