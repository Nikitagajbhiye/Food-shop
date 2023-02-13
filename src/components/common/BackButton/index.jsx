import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const BackButton = () => {
    const navigate = useNavigate();
   const handleClick = () =>{ 
    navigate('/');
  }

  return (
    <div className='back'>
      <button onClick={handleClick}>
      <i className="fas fa-long-arrow-alt-left"></i> Back
      </button>
    </div>
  );
};


export default BackButton;