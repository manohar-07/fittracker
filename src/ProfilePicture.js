
import React, { useState } from 'react';

const ProfilePicture = ({ imageUrl, altText = 'Profile Picture', onImageChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    const newImageUrl = URL.createObjectURL(e.target.files[0]);
    onImageChange(newImageUrl);
    setIsEditing(false);
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt={altText}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      {isEditing ? (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      ) : (
        <button onClick={() => setIsEditing(true)}>Change Profile Picture</button>
      )}
    </div>
  );
};

export default ProfilePicture;