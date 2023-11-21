import React, {useState} from "react";
import "./style.css";

function WorkoutForm() {
  const [Form,setForm]=useState({});

  const handleForm= (e)=>{
    console.log(e.target.value,e.target.name);
    // name=e.target.name;
    // value=e.target.value;
    setForm({ ...Form,[e.target.name]:e.target.value})
    
  }
  const saveExercise=async (e)=>{
    // e.preventDefaulf();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(Form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    console.log(data);
  }
  const saveWorkout=(e)=>{

  }
  
  return (
<>
    <img src="workoutlog2.jpg" className='rounded float-start' id='img1' alt="workout log" />
    <div>
     
      <div className="container mt-5" id="form">
        <h3 className="text-center" id="formhead">
          Workout Log
        </h3>
        <form id="workout">
          <div className="form-group">
            <label for="exerciseName">Exercise Name:</label>
            <input
              type="text"
              className="form-control"
              id="exerciseName"
              name="exerciseName"
              required
              value={Form.exercise}
              onChange={handleForm}
            />
          </div>

          <div className="form-group">
            <label for="numberOfSets">Number of Sets:</label>
            <input
              type="number"
              className="form-control"
              id="numberOfSets"
              name="numberOfSets"
              required
              value={Form.sets}
              onChange={handleForm}
            />
          </div>

          <div className="form-group">
            <label for="numberOfReps">Number of Reps:</label>
            <input
              type="number"
              className="form-control"
              id="numberOfReps"
              name="numberOfReps"
              required
              value={Form.reps}
              onChange={handleForm}
            />
          </div>

          <div className="form-group">
            <label for="weight">Weight (kgs):</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              name="weight"
              required
              value={Form.weight}
              onChange={handleForm}
            />
          </div>

          <div className="form-group">
            <label for="time">Time (minutes):</label>
            <input
              type="number"
              className="form-control"
              id="time"
              name="time"
              required
              value={Form.time}
              onChange={handleForm}
            />
          </div>

          <button type="button" className="btn custom-btn" onClick={saveExercise}>
            Save Exercise
          </button>
          <button
            type="button"
            className="btn custom-btn"
            id="savebtn"
            onClick={saveWorkout}
          >
            Save Workout
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default WorkoutForm;
