import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';

  

function WorkoutLog() {
  const navigate = useNavigate();

  return (
    <div className='container1' onClick={()=>{navigate('/workoutForm')}}>
       <img src="workout.jpg" className='rounded float-start' id='img1' alt="workout log" />
       <div className='textinimg'>Log Your Wourkout Here</div>
    </div>
  )
}

export default WorkoutLog
