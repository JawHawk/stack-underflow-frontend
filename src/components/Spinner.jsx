import React, { Component } from 'react'
import logoGif from './../assets/logo-ani.gif'

export class Spinner extends Component {
  render() {
    return (
      <div style={{width: "fit-content", height: "fit-content", margin: "auto"}} className="my-5">
    {/* <button className="btn btn-info mx-3" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm mx-2" role="status" aria-hidden="true"></span>
      Loading...
    </button> */}
    <img src={logoGif} alt=""/>

    </div>)
  }
}

export default Spinner