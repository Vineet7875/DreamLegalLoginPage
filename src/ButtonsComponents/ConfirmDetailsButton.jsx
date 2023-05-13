import React from 'react';
import './CreateProfileButton';
import { useNavigate } from 'react-router-dom';
function ConfirmDetailsButton() {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate("./LoginPage")
  };

  return (
    <button className="create-profile-button" onClick={handleClick}>
      Confirm Details
    </button>
  );
}

export default ConfirmDetailsButton;
