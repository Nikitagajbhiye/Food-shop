import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './style.css';

const CartCountButton = ({ cartCount }) => {
   const navigate = useNavigate();

   const handleClick = () =>{ 
    navigate('/cart');
  }

  return (
    <div className='btnCartCount' onClick={handleClick}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCountButton);