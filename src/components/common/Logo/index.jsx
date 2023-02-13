import React from "react";
import './style.css';
import logo from './logo.jpg';

const Logo = () =>
{
    return( 
    <div className="logo"> 
        <div>
            <img src={logo} alt="logo"/>
            <span><b>Taste Maker</b></span>
        </div>
    </div>
    );
};

export default Logo;