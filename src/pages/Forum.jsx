import React, {useState} from 'react'
import Forum_Back from './Forum_Back'

const Forum = (props) => {
  const [quest, setQuest] = useState()
  const getQuestion= async () => {
    const response = await fetch("/question/get/" + props.id, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem("auth-token")
      }
    })
    const data = await response.json()
    setQuest(data)
  }
  getQuestion()
  console.log(quest)
  return (
<Forum_Back/>
  )
}

export default Forum
