import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";


const Forum = () => {
  const { questionId } = useParams()
  const [quest, setQuest] = useState()
  const [user,setUser] = useState()
  const [answer, setAnswer] = useState()
  // const getuser = (id) => {
  //   fetch("https://stackunderflowbackend.onrender.com/user/"+id,{
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   } ).then((resp) => resp.json()).then((data)=> {setUser(data)} )
  // }
  useEffect(() => {
      fetch("https://stackunderflowbackend.onrender.com/question/get/" + questionId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token")
        }
      }).then((resp) => resp.json()).then((data) => {setQuest(data)})
    //   fetch("https://stackunderflowbackend.onrender.com/user/"+quest.author,{
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // } ).then((resp) => resp.json()).then((data)=> {setUser(data)} )
  }, [])
  useEffect(() => {
  if(quest){
    console.log(quest.author);
    fetch("https://stackunderflowbackend.onrender.com/user/"+quest.author,{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    } ).then((resp) => resp.json()).then((data)=> {setUser(data)} )
  }
}, [quest])

const getAnswer = () => {
  fetch("https://stackunderflowbackend.onrender.com/answer/all/"+questionId, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json",
      "auth-token": localStorage.getItem("auth-token")
    }
  }).then((resp)=> resp.json() ).then((data)=> setAnswer(data))
}
 getAnswer()
  return <div>
    {quest && user && (<div> 
    <h1>{quest.content}</h1>
    <h1>{user.name? user.name: "Anonymous"}</h1>
    </div>)}
    
  </div>
}

export default Forum
