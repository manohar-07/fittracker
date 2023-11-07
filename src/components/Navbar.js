import React from 'react';
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FitTracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/"}>WorkoutLOg</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FitTracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to={"/"}>WorkoutLog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
