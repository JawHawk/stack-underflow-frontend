import React from 'react'

const Forum = (props) => {
    const getQuestion = async () => {
        await fetch("/question/get/"+props.id)
    }
  return (
    <div>
      <h1>Question</h1> 
      <h3>Answer</h3>
      <p>Date</p>
      <p>Author name</p>

    </div>
  )
}

export default Forum
