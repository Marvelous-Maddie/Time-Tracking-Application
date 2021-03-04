import React, { useState, useEffect } from 'react';

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
    
    const stop = () => {
        clearInterval(interv);
        setPlaying(false);
    };
    
    const reset = () => {
        clearInterval(interv);
        setPlaying(false);
        setTime({s:0, m:0, h:0})
    };

    return(
        <div class="d-grid gap-2 col-2 mx-auto my-5">
            <h1 className="d-flex mx-auto my-5">
                {time.h}:{time.m}:{time.s}
            </h1>
            {playing ? (
                <button type="button" className="btn btn-primary my-2" onClick={() => stop()}>
                    Stop
                </button>
            ) : (
                <button type="button" className="btn btn-primary my-2" onClick={() => start()}>
                    Start
                </button>
            )}
            <button type="button" className="btn btn-success my-2">
                Add Task
            </button>
            <button type="button" className="btn btn-outline-light mt-2 mb-5" onClick={() => reset()}>
                Reset
            </button>
        </div>
    )
};

export default Tracker;