import React from "react";
import './style.css';
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount, selectCartItems ,} from '../../../../redux/cart/cart.selector';
import { cartAddItem, cartRemoveItem, } from '../../../../redux/cart/cart.action';

const MenuItem = ({
  item,
  cartAddItem,
  cartRemoveItem,
  CartCount,
  cartList, 
}) => {
const {id,name,info,price,img} = item;

 const handleItemQuantity = () => {
  let quantity=0;
  if(CartCount !== 0) {
    const foundItemInCart=cartList.find(item=>item.id===id);

    if(foundItemInCart) {
      quantity = foundItemInCart.quantity;
    }
  }
  return quantity;
};

{
    return( 
    <div className="item">
      <img src={img} alt="item"  />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info"><small>{info}</small></p>
      </div>
      <div className="item-food_desc">
        <span className="food_desc-price">${price}</span>
        <ButtonAddRemoveItem quantity={handleItemQuantity()}  

        handleAddItem={() => cartAddItem(item)}
        handleRemoveItem={() => cartRemoveItem(item)}
        />
      </div>
    </div>
    );
};
};

const mapStateToProps = createStructuredSelector({
  CartCount : selectCartItemsCount,
  cartList : selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  cartAddItem : (item) => dispatch(cartAddItem(item)),
  cartRemoveItem : (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem) ;