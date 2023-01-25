import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../requireddata/login.css"

const Login = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        e.preventDefault()
        setCred({ ...cred, [e.target.name]: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(process.env.REACT_APP_baseurl + "v1/loggedin/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email: cred.email,password: cred.password })        
        })
        let data = await response.json()
        localStorage.setItem("auth-token", data.authtoken)
        navigate("/")
    }
    return (
        <div>
            <div className="container_">
                <h1 className="heading">Login</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="cont">
                        <label htmlFor="email">Email: </label>
                        <input style={{ padding: "5px" }} type="text" name="email" id="email" value={cred.email} onChange={handleChange} required />
                    </div>
                    <div className="cont">
                        <label htmlFor="password">Password: </label>
                        <input style={{ padding: "5px" }} type="password" name="password" id="password" value={cred.password} onChange={handleChange} required />
                    </div>
                    <div>
                        <button className='btn__' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
