import React from "react";
import { useState, useEffect } from "react";

const url = "https://stackunderflowbackend.onrender.com/question/all";
const Dashboard = () => {
  const [questions, setQuestions] = useState(null);
  const [display, setDisplay] = useState(false);
  const [addqs, setAddqs] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addqs);
    const response = await fetch(
      "https://stackunderflowbackend.onrender.com/question/new",
      {
        method: "POST",
        header: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ content: addqs }),
      }
    );
    const data = await response.json();
  };
  const handleChange = (e) => {
    e.preventDefault();
    setAddqs(e.target.value);
  };
  const handleClick = () => {
    setDisplay(!display);
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data), console.log(data);
      });
  }, []);
  return (
    <div className="text-center">
      {questions &&
        questions.map((el, index) => {
          return (
            <div key={index} className="questions">
              <button >X</button>
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
      <button className="text-center" onClick={handleClick}>
        Ask Question
      </button>
      {display && (
        <div>
          <form action="" className="form">
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
