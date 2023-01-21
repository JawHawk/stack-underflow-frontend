import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <div className="tag">
        All Your <span>stacks</span> under one place
      </div>
      <Link to="./Dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  );
};

export default Landing;
