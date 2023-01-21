import React from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <div>
      <Navbar></Navbar>

      <form className="form">
        <h1>Sign Up</h1>
        <h4>
          Roll No. : <input type="text" className="input" />
        </h4>
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
