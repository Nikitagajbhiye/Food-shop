import React from "react";
import './style.css';
import banner from './banner.jpg';


const Banner = ({ handleScrollMenu }) =>
{
    return( 
    <header>
        <div className="header-content">
            
            <div className="content-main">
                <h1>Delicious food for your cravings</h1>
                <p>We’re a fine dining restaurant serving tasting menus of 
                   abstract cuisine as an exhibition of 
                   local ingredients , flavors , ideas , art , ceramics , techniques.</p>
                <button onClick={handleScrollMenu} >
                    View Menu <i className="fas fa-long-arrow-alt-right"></i>
                </button>
            </div>
        </div>
        <img src={banner} alt="banner" className="header-img" />
    </header>
    );
};

export default Banner;