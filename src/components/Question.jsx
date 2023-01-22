import React, { useState, useEffect } from 'react'
import Forum from '../pages/Forum'

function Question(props) {
  const {date, id,content, author, user} = props  
  const [Author, setAuthor] = useState(null)
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true);
    const url = "https://stackunderflowbackend.onrender.com/User/" + author;
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "auth-token" : localStorage.getItem("auth-token")
        }
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data)});
  }, []);

  return (
        <div className="questions" onClick={()=> {return (<div> <Forum id= {props.id}></Forum> </div>) }}>
            <div className="questions-info">
                <div className="content" >
                    {content}
                </div>
                <div className="d-flex justify-content-between" id="usdate">
                    <span className="usr">{Author && Author.email}</span>
                    <span className="text-end">
                      {new Date(date).toTimeString().slice(0, 5) +
                        " " +
                        new Date(date).toDateString().slice(0, 11)}
                    </span>
                  </div>
            </div>
                {Author && user && (Author.email === user.email) && <button onClick={async ()=> {await fetch("https://stackunderflowbackend.onrender.com/question/delete/"+id, {
              method: "DELETE"
            })
            }}>X</button> }
                  
        </div>
  )
}

export default Question