import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../requireddata/allquestion.css"

const Allquestion = () => {
    const navigate = useNavigate()
    const [questions, setQuestions] = useState()
    const [addques, setAddQues] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/question/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(resp => resp.json()).then((data) => setQuestions(data))
    }, [])


    useEffect(() => {
        fetch("http://localhost:5000/v1/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        }).then((resp) => resp.json()).then((data) => { setUser(data._id) })
    }, [])
    const handleAdd = (e) => {
        fetch("http://localhost:5000/question/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ content: addques })
        })
        setAddQues("")
    }

    const handleDelete = (id) => {
        fetch("http://localhost:5000/question/delete/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleAdd}>
                <label htmlFor="addques">Add Question: </label>
                <input type="text" className='mx-1' name="addques" value={addques} onChange={(e) => { e.preventDefault(); setAddQues(e.target.value) }} id="addques" />
                <button type="submit" className='btn btn-primary'>Ask Question</button>
            </form>
            <div className='d-flex justify-content-around flex-wrap abc'>
                {questions && questions.map((ele) => {
                    return (
                        <div class="card allquest" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Question: <span className='fw-normal'>{ele.content}</span></h5>
                                <p class="card-text">Author: {ele.author[0]} <br />Date: {new Date(ele.date).toDateString()}</p>
                                <button class="btn btn-primary" onClick={() => { navigate("/question/" + ele._id) }}>Solutions</button>
                                {user && (user === ele.author[1]._id) && <button class="btn btn-primary mx-2" onClick={() => { return handleDelete(ele._id) }}>Delete</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Allquestion
