import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import man from "./../assets/man-doubt.png";
import women from "./../assets/women-doubt.png";

const Landing = () => {
  return (
    <div>
      <div className="tag">
        All Your <span>stacks</span> under one place
      </div>
      <Link to="./Dashboard">
        <button
          className="dash-btn"
          style={{ position: "absolute", left: "40vw", top: "180px" }}
        >
          Go to Questions
        </button>
      </Link>
      <div>
        <button
          className="dash-btn"
          style={{ position: "absolute", right: "40vw", top: "240px" }}
        >
          Go to Community
        </button>
      </div>

      <div className="people-ilus">
        <img src={man} alt="" />
        <img src={women} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
