import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tracker = () => {
    //const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState({s:0, m:0, h:0});
    const [playing, setPlaying] = useState(false);
    const [interv, setInterv] = useState();

    // useEffect(() => {
    //     if (playing) {
    //         const id = window.setInterval(() => {
    //             setSeconds(seconds => seconds+1)
    //     }, 1000);
    //         return () => window.clearInterval(id);
    //     }
    // }, [playing]);

    //Start time tracker
    const start = () => {
        run();
        setPlaying(true);
        setInterv(setInterval(run, 1000));
    };
    
    var updatedS = time.s, updatedM = time.m, updatedH = time.h;
    
    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
            updatedS++;
        return setTime({s:updatedS, m:updatedM, h:updatedH});
    };

    //Stop time tracker
    const stop = () => {
        clearInterval(interv);
        setPlaying(false);
    };
    
    //Reset time tracker
    const reset = () => {
        clearInterval(interv);
        setPlaying(false);
        setTime({s:0, m:0, h:0})
    };

    return(
        <div className="d-grid gap-2 col-6 mx-auto my-5">
            <h2 className="d-flex mx-auto my-5">
                Time Tracker
            </h2>
            <div className="d-flex flex-column mx-auto my-2">

                {/*Time tracker*/}
                <h1 className="d-flex mx-auto my-5">
                    <span>{(time.h >= 10)? time.h : "0"+ time.h}</span>: 
                    <span>{(time.m >= 10)? time.m : "0"+ time.m}</span>:
                    <span>{(time.s >= 10)? time.s : "0"+ time.s}</span>
                </h1>

                {/*Buttons*/}
                {playing ? (
                    <button type="button" className="btn btn-primary my-2" onClick={stop}>
                        Stop
                    </button>
                ) : (
                    <button type="button" className="btn btn-primary my-2" onClick={start}>
                        Start
                    </button>
                )}
                <button type="button" className="btn btn-danger my-2">
                    <Link to={{pathname: "/addTask", state: { time: {time}}}}>Add Task</Link>
                </button>
                <button type="button" className="btn btn-outline-light mt-2 mb-5" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
};

export default Tracker;