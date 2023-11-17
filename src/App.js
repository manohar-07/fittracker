import React, { useState } from 'react';
import ProfilePicture from './ProfilePicture';
import Navbar from './components/Navbar';
import WorkoutForm from './components/WorkoutForm';
import WorkoutLog from './components/WorkoutLog';
import About from './components/About';
import Login from './components/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [imageUrl, setImageUrl] = useState('https://example.com/path/to/your/image.jpg');

  const handleImageChange = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };

  return (
    <>
      <ProfilePicture imageUrl={imageUrl} onImageChange={handleImageChange} />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<WorkoutLog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/workoutForm" element={<WorkoutForm />} />
        </Routes>
        <div>
          
          {/* Other profile information goes here */}
        </div>
      </Router>
    </>
  );
}




export default App;
