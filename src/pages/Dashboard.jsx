import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";


const Dashboard = () => {
  const [questions, setQuestions] = useState(null);
  const [display, setDisplay] = useState(false);
  const [addqs, setAddqs] = useState();
  const [loading,setLoading] =useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
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
  }, []);
  return (
    <div className="text-center dash">
    {loading && <Spinner/>}
      {questions &&
        questions.map((el, index) => {
          return (
            <div key={index} className="questions">
              <button onClick={async ()=> {await fetch("https://stackunderflowbackend.onrender.com/question/delete/"+el._id, {
          method: "DELETE"
        })
        }}>X</button>
              <div className="d-flex justify-content-between" id="usdate">
                <span className="usr">user</span>
                <span className="text-end">
                  {new Date(el.date).toTimeString().slice(0, 5) +
                    " " +
                    new Date(el.date).toDateString().slice(0, 11)}
                </span>
              </div>
              <div className=" text-center" id="main-ques">
                {el.content}
              </div>
            </div>
          );
        })}
      <button className="ask-btn" onClick={handleClick}>
        Ask Question ?
      </button>
      {display && (
        <div>
          <form action="" className="form form-ques">
            <input
              type="text"
              value={addqs}
              onChange={handleChange}
              className="input"
            />
            <button type="submit" onClick={handleSubmit}>
              submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
