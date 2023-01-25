import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:5000/v1/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        }).then((resp) => resp.json()).then((data) => {setUser(data) })
    }, [])

    return (
        <div>
            {user && <div>
                <div class="card" style={{width: "40vw", margin: "auto", marginTop: "40px"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" class="card-img-top"  alt="Profile Pic" style={{width: "10vw", height: "20vh", margin: "auto", marginTop: "30px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Name : {user.name? user.name: "Anonymous"}</h5>
                        <p class="card-text">Email: {user.email} <br />Unique Id: {user._id}</p>
                        <button class="btn btn-primary" onClick={() => { localStorage.removeItem("auth-token"); navigate("/login") }}>Log out</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Profile
