import React from 'react';
import './CreateProfileButton.css';
import { useNavigate } from 'react-router-dom';
function CreateProfileButton() {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate("./CreateProfileForm")
  };

  return (
    <button className="create-profile-button" onClick={handleClick}>
      Create Profile
    </button>
  );
}

export default CreateProfileButton;
