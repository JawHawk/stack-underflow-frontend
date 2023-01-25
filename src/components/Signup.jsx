import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../requireddata/login.css"

const Signup = () => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        name : "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        e.preventDefault()
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await fetch("https://stackunderflowbackend.onrender.com/v1/signup/createuser",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({name: cred.name,email: cred.email,password: cred.password})        
            })
            navigate("/login")
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <div className="container_">
                <h1 className="heading">SignUp</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="cont">
                        <label htmlFor="name">Name: </label>
                        <input style={{ padding: "5px" }} type="text" name="name" id="name" value={cred.name} onChange={handleChange} required/>
                    </div>
                    <div className="cont">
                        <label htmlFor="email">Email: </label>
                        <input style={{ padding: "5px" }} type="email" name="email" id="email" value={cred.email} onChange={handleChange} required />
                    </div>
                    <div className="cont">
                        <label htmlFor="password">Password: </label>
                        <input style={{ padding: "5px" }} type="password" name="password" id="password" value={cred.password} onChange={handleChange} required/>
                    </div>
                    <div>
                        <button className='btn__' type="submit">Submit</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Signup
