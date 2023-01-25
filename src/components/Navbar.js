import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div style={{backgroundColor : "transparent"}}>
      <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Stack UnderFlow</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       {!localStorage.getItem("auth-token")?
       <div className='d-flex justify-content-end'>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signup">Sign up</Link>
        </li>
        </div>:
        <div className='d-flex'>
        <li className="nav-item">
          <button className='btn btn-info' onClick={()=>navigate("/profile")}>Profile</button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-info" aria-current="page" onClick={()=> {localStorage.removeItem("auth-token"); navigate("/login")}}>Log out</button>
        </li>
        </div>
        }
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
