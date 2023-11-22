// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import WorkoutForm from './components/WorkoutForm';
import React from "react";
import About from'./components/About'
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';
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
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path="/workoutlog" element={<WorkoutForm />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/workoutForm" element={<WorkoutForm/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
      <Route exact path='/profile' element={<Profile />}></Route>

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
