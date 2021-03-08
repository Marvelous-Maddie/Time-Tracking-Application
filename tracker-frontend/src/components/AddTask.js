import React, { useState } from 'react';
import Modal from 'react-modal';

const AddTask = ({time}) => {
    const [task, setTask] = useState({duration: {time}, description: "", timestamp: 0})
    const [open, setOpen] = useState(false);
    
    const customStyles = {
        content : {
            backgroundColor: 'black',
            minWidth: '60%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: '30px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    return(
        <div >
            <button type="button" className="btn btn-danger my-2" style={{ width: "100%" }} onClick={handleOpen}>
                    Add Task
            </button>

            <Modal isOpen={open} style={customStyles} onRequestClose={handleClose}>
                <h2>Add Task</h2>
                <div>Duration: 
                    <span>{(time.h >= 10)? time.h : "0"+ time.h}</span>: 
                    <span>{(time.m >= 10)? time.m : "0"+ time.m}</span>:
                    <span>{(time.s >= 10)? time.s : "0"+ time.s}</span></div>
                <form>
                    
                </form>
                <button type="button" class="btn btn-primary m-2" onClick={handleClose}>Close</button>
            </Modal>
        </div>
    )
};

export default AddTask;