import React from 'react';
import './style.css';
import Logo from '../Logo';
import {  Link } from "react-router-dom";


const navbar= ({handleScrollMenu}) =>{
  return (

<nav>
<Logo />
<div>
    
    <ul id='navbar'>
    <li>
      <a href='/'>Home</a>
    </li>
    <li>
    <a onClick={handleScrollMenu}>Menu</a>
    </li>
    <li>
    <a href='/cart'>Cart</a>
    </li>
    <li>
    <a href='/offers'>Offers</a>
    </li>
    </ul>
  </div>
</nav>
  );
}
export default navbar;