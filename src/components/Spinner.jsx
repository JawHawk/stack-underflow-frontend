import React, { Component } from 'react'
import logoGif from './../assets/logo-ani.gif'

export class Spinner extends Component {
  render() {
    return (
      <div style={{ width: "fit-content", height: "fit-content", margin: "auto" }} className="my-5">
        <img src={logoGif} alt="" />
      </div>)
  }
}

export default Spinner