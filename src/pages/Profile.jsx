import React from "react";
import userImg from "./../assets/profile-bot.png";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [User, setUser] = useState(null);
  const navigate = useNavigate();
  const style = {
    display: "flex",
    flexDirection: "row",
    width: "75vw",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  };
  const style2 = {
    scale: "1.4",
    padding: "120px",
  };

  useEffect(() => {
    if(!localStorage.getItem("auth-token")) {navigate('/login')}
    else{
    fetch("https://stackunderflowbackend.onrender.com/v1/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data)); }
  }, []);

  return (
    <div>
      <div className="profile" style={style}>
        <img src={userImg} style={{ height: "400px" }} />
        <div style={style2}>
          {!User && <h3>Loading ...</h3>}
          {User && (
            <div>
              <span>Welcome {User.name ? User.name : "Anonymous"} !!</span>
              <h5>Email: {User.email}</h5>

              <h5>Id: {User._id}</h5>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
