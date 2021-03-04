import React, { useState, useEffect } from 'react';

const Tracker = () => {
    //const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState({s:0, m:0, h:0});
    const [playing, setPlaying] = useState(false);
    const [interv, setInterv] = useState();

    //Only counting seconds
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

    //Add task button
    const handleSubmit = () => {
        //body
    };

    return(
        <div class="d-grid gap-2 col-6 mx-auto my-5">
            <h2 className="d-flex mx-auto my-5">
                Time Tracker
            </h2>
            <div class="d-grid gap-2 col-2 mx-auto my-5">

                {/*Time tracker*/}
                <h1 className="d-flex mx-auto my-5">
                    {time.h}:{time.m}:{time.s}
                </h1>

                {/*Buttons*/}
                {playing ? (
                    <button type="button" className="btn btn-primary my-2" onClick={() => stop()}>
                        Stop
                    </button>
                ) : (
                    <button type="button" className="btn btn-primary my-2" onClick={() => start()}>
                        Start
                    </button>
                )}
                <button type="button" className="btn btn-success my-2" onClick={() => handleSubmit()}>
                    Add Task
                </button>
                <button type="button" className="btn btn-outline-light mt-2 mb-5" onClick={() => reset()}>
                    Reset
                </button>
            </div>
        </div>
    )
};

export default Tracker;