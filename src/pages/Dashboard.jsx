import React from "react";
import { useState, useEffect } from "react";
import Question from "../components/Question";
import Spinner from "../components/Spinner";
// import Footer from "../components/Footer";


const Dashboard = () => {
  const [questions, setQuestions] = useState(null);
  const [display, setDisplay] = useState(false);
  const [addqs, setAddqs] = useState();
  const [loading,setLoading] =useState(false)
  const [User, setUser] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    fetchTrigger(trigger +1)
    const response = await fetch(
      "https://stackunderflowbackend.onrender.com/question/new",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ content: addqs }),
      }
      );
      const data = await response.json();
    setLoading(false)
  };
  const handleChange = (e) => {
    e.preventDefault();
    setAddqs(e.target.value);
  };
  const handleClick = () => {
    setDisplay(!display);
  };
  useEffect(() => {
    setLoading(true)
    const url = "https://stackunderflowbackend.onrender.com/question/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data), setLoading(false);
      });

    fetch('https://stackunderflowbackend.onrender.com/v1/getUser', {
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem("auth-token")
      }
      }).then((response) => response.json())
      .then((data) => {
          console.log(data);
          setUser(data)})
  }, []);
  return (
    
    <div className="text-center dash">
      
    {loading && <Spinner/>}
    <h1>Recent Questions</h1>
      {questions &&
        questions.map((el, index) => <Question date={el.date} key={index} content={el.content} id={el.id} author={el.author} user={User}/> )}
      <button className="ask-btn" onClick={handleClick}>
        Ask Question ?
      </button> 
      {/* {display && ( */}
        <div>
          <form action="" className="form form-ques">
            <input
              type="text"
              value={addqs}
              onChange={handleChange}
              className="input"
              placeholder="Ask Your Question"
            />
            <button type="submit" onClick={handleSubmit}>
              submit
            </button>
          </form>
        </div>
      {/* )} */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Dashboard;
