import React from "react";
import './style.css';
import emptyCart from './emptyCart.jpg';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {

   const navigate = useNavigate();
   const handleClick = () =>{ 
    navigate('/');
  }
    return (
      <div className="emptyCart">
        <img src={emptyCart} alt="empty" />
        <button onClick={handleClick}>
            <i className="fas fa-long-arrow-alt-left"></i> shop Now
        </button>
      </div>
    );
  };

export default EmptyCart;