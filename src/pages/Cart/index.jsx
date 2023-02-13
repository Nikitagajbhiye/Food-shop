import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Menu from '../../components/common/Menu';
import './style.css';
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Header";
import EmptyCart from "../../components/cart/EmptyCart";
import {
  selectCartItemsCount,
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import BackButton from "../../components/common/BackButton";

const Cart = ({ cartList, CartCount, cartTotal}) => 
        <>
        <Navbar />
        <BackButton />
      {CartCount == 0 ? ( <EmptyCart /> 
      ) : ( 
      <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>
      )
      }      
        <Footer />
        </>

  const mapStateToProps = createStructuredSelector({
    CartCount : selectCartItemsCount,
    cartList : selectCartItems,
    cartTotal : selectCartTotal,
  });

export default connect(mapStateToProps)(Cart);