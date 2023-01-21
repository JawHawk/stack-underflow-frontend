import React from "react";
import userImg from "./../assets/user.png";

const Profile = () => {
  return (
    <div className="profile">
      <span>Welcome User</span>
      <img src={userImg} height="250rem" style={{ padding: "20px" }} />
      <button>LogOut</button>
    </div>
  );
};

export default Profile;
