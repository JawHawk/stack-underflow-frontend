import React from "react";
import userImg from "./../assets/user.png";
import { useState,useEffect } from "react";
const Profile = () => {
  const [User, setUser] = useState(null)
  const style = {
    display: 'flex',
    flexDirection: 'row',
    width: '75vw',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)'
  }

  useEffect(() => {
    fetch('https://stackunderflowbackend.onrender.com/v1/getUser', {
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem("auth-token")
      }
      }).then((response) => response.json())
      .then((data) => setUser(data))
    }, [])
  
  return (
    <div className="profile" style={style}>
      <img src={userImg} style={{height:'200px'}} />
      <div >
        <span>Welcome User !!</span>
        {!User && <h3>Loading ...</h3>}
        {User && 
        <div>
          <h5>Email: {User.email}</h5>
          <h5>Name: {User.name ? User.name : 'Anonymous'}</h5>
          <h5>Id: {User._id}</h5>
        </div>}
      </div>
    </div>
  );
};

export default Profile;
