import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../requireddata/question.css";

const Question = () => {
  const { questionid } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState();
  const [ans, setAns] = useState();
  const [ques, setques] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(
      "https://stackunderflowbackend.onrender.com/question/get/" + questionid
    )
      .then((resp) => resp.json())
      .then((data) => setques(data));
    fetch("https://stackunderflowbackend.onrender.com/answer/all/" + questionid)
      .then((resp) => resp.json())
      .then((data) => setAnswer(data));
    fetch("https://stackunderflowbackend.onrender.com/v1/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data._id);
      });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    fetch(
      "https://stackunderflowbackend.onrender.com/answer/create/" + questionid,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ content: ans }),
      }
    );
  };

  const handleDelete = (id) => {
    fetch("https://stackunderflowbackend.onrender.com/question/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/allquestion");
  };
  const handleDeleteAns = (id) => {
    fetch("https://stackunderflowbackend.onrender.com/answer/delete/" + id, {
      method: "DELETE",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
  };

  return (
    <div>
      {ques && (
        <div className="quest card">
          <div className="heading">
            Q: <span className="text-primary">{ques.content}</span>
          </div>
          <div className="author">Author: {ques.author[0]}</div>
          <div className="time">
            Posted on: {new Date(ques.date).toDateString()}
          </div>
          {user && user === ques.author[1]._id && (
            <button
              className="btn btn-info"
              onClick={() => {
                handleDelete(ques._id);
              }}
            >
              Delete
            </button>
          )}
        </div>
      )}
      {answer && answer.length > 0 ? (
        answer.map((ele) => {
          return (
            <div className="ans card">
              <div className="heading bg-red">Answer: {ele.content}</div>
              <div className="author">Posted by : {ele?.author[0]}</div>
              <div className="time">
                Posted on : {new Date(ele.date).toDateString()}
                {console.log(ele._id)}
                {console.log(user)}
              </div>
              {user && user === ele._id && (
                <button
                  className="btn btn-info"
                  onClick={() => handleDeleteAns(ele._id)}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })
      ) : (
        <div className="ans">
          <div className="heading">
            Currently there is no Answer for this question
          </div>
        </div>
      )}
      <form action="" onSubmit={handleAdd} className="my-3">
        <label htmlFor="addans">Wanted to answer this question:</label>
        <input
          type="text"
          name="addans"
          value={ans}
          className="input"
          placeholder="Write Here"
          id="addans"
          onChange={(e) => {
            e.preventDefault();
            setAns(e.target.value);
          }}
        />
        <button type="submit">Add Answer</button>
      </form>
    </div>
  );
};

export default Question;
