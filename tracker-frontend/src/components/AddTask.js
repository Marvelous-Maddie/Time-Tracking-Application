import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AddTask = () => {
    //get state
    const location = useLocation();
    const {time} = location.state.time;
    const {h, m, s} = time;

    //Object to string
    const hour = () => {
        if(h >= 10) {
            return h;
        }else{
           return "0" + h;
        }
    };

    const min = () => {
        if(m >= 10) {
            return m;
        }else{
            return "0" + m;
        }
    };

    const sec = () => {
        if(s >= 10) {
            return s;
        }else{
           return "0" + s;
        }
    };

    const stringifiedTime = `${hour()}:${min()}:${sec()}`

    //Create task and submit
    const [task, setTask] = useState({ duration: stringifiedTime, description: "", timestamp: Date.now()})
    console.log(task);

    const handleChange = e => {
        setTask(prevState => {return {...prevState, [e.target.name]: e.target.value}});
    };

    const handleSubmit = e => {
        postData(e, task);
    }

    const postData = (e, task) => {
        e.preventDefault();
        const {duration, description, timestamp} = task;
        console.log({duration, description, timestamp});

        const res = fetch("http://localhost:5000/addTask", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({duration, description, timestamp})
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(alert("Task added successfully"))
        .catch(alert);
    };
    
    return(
        <div className="d-grid gap-2 col-6 mx-auto my-5">
            <h2 className="d-flex mx-auto my-5">
                Add Task to list
            </h2>
            <div className="d-flex flex-column mx-auto my-2">
                <h5 className="d-flex mt-5">Duration:</h5>
                <p>
                    {stringifiedTime}
                </p>
                <form>
                    <div className="mb-3">
                        <label for="description" className="form-label">Description of task</label>
                        <input type="text" name="description" className="form-control" onChange={handleChange}/>
                    </div>
                </form>
                <button type="button" className="btn btn-danger my-2" onClick={handleSubmit}>Add task</button>
            </div>
        </div>
    )
};

export default AddTask;