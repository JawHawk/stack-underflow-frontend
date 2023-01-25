import React from "react";
import { Link } from "react-router-dom";
import "../requireddata/background.css";
import man from "../requireddata/man-doubt.png";
import women from "../requireddata/women-doubt.png";

const Background = () => {
  return (
    <div className="container">
      <div className="tag">
        All Your <span>stacks</span> under one place
      </div>

      <div className="link-btn">
        <Link to="/allquestion">
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
      </div>

      <div className="people-ilus">
        <img
          className="man"
          src={man}
          alt=""
          style={{ height: "65vh", position: "absolute", left: "12vw" }}
        />
        <img
          className="woman"
          src={women}
          alt=""
          style={{ height: "65vh", position: "absolute", right: "12vw" }}
        />
      </div>
    </div>
  );
};

export default Background;
