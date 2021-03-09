import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/prime-time.png';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={logo} alt="Logo" style={{ width: "7%", height: "7%" }} className="d-inline-block align-center mr-3"></img>
                    Time Tracker
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link exact to="/" className="nav-link">Tracker</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addTask" className="nav-link">Add Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/allTasks" className="nav-link">All Tasks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;