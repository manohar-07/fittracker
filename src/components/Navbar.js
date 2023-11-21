import React from 'react';
import './style.css';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontSize: '24px' }}>FitTracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/workoutlog"} style={{ fontSize: '18px' }}>WorkoutLog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"} style={{ fontSize: '18px' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to={"/login"} style={{ fontSize: '18px' }}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to={"/register"} style={{ fontSize: '18px' }}>Register</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Link className='nav-link ms-auto me-3' to={"/profile"} style={{ fontSize: '20px' }}>
                <i className="fas fa-user-circle me-2"></i>
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
