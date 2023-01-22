import React from "react";
import userImg from "./../assets/profile-bot.png";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
const Profile = () => {
  const [User, setUser] = useState(null);
  const style2 = {
    
  };

  useEffect(() => {
    fetch("https://stackunderflowbackend.onrender.com/v1/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <div className="profile">
        <img src={userImg} style={{ height: "400px" }} />
        <div style={style2} id="usr-data">
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
