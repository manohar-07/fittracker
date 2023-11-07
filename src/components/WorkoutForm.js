import React from "react";
import "./style.css";

function WorkoutForm() {
  return (
    <div>
      <div class="container mt-5" id="form">
        <h2 class="text-center mb-4" id="formhead">
          Workout Logging Form
        </h2>
        <form id="workout">
          <div class="form-group">
            <label for="exerciseName">Exercise Name:</label>
            <input
              type="text"
              class="form-control"
              id="exerciseName"
              name="exerciseName"
              required
            />
          </div>

          <div class="form-group">
            <label for="numberOfSets">Number of Sets:</label>
            <input
              type="number"
              class="form-control"
              id="numberOfSets"
              name="numberOfSets"
              required
            />
          </div>

          <div class="form-group">
            <label for="numberOfReps">Number of Reps:</label>
            <input
              type="number"
              class="form-control"
              id="numberOfReps"
              name="numberOfReps"
              required
            />
          </div>

          <div class="form-group">
            <label for="weight">Weight (kgs):</label>
            <input
              type="number"
              class="form-control"
              id="weight"
              name="weight"
              required
            />
          </div>

          <div class="form-group">
            <label for="time">Time (minutes):</label>
            <input
              type="number"
              class="form-control"
              id="time"
              name="time"
              required
            />
          </div>

          <button type="button" class="btn custom-btn" onclick="saveExercise()">
            Save Exercise
          </button>
          <button
            type="button"
            class="btn custom-btn"
            id="savebtn"
            onclick="saveWorkout()"
          >
            Save Workout
          </button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutForm;
