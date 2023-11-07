// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import WorkoutForm from './components/WorkoutForm';
import WorkoutLog from './components/WorkoutLog';
import React from "react";
import About from'./components/About'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<WorkoutLog />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/workoutForm" element={<WorkoutForm/>}></Route>
      </Routes>

    </Router>
   
    {/* <div className="container">
      <Login />
    </div> */}
    {/* <WorkoutLog /> */}

    </>
  );
}

export default App;
