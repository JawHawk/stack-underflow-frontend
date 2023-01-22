import React from 'react'

const Forum_Back = () => {
  return (
    <div>
      <div className="card" style={{ width: "50rem", margin: "auto" }}>
      <div className="card-body">
        <h5 className="card-title">{props.question}</h5>
        <p className="card-text">{props.answer}</p>
        <button onClick={() => { }}>Delete Answer</button>
      </div>
    </div>
    </div>
  )
}

export default Forum_Back
