import React from "react";
import './style.css';


    function BrandItems(props) {
        return (
            <div className="brands">
                <img src={props.img} alt="item"  />
                 <h1> {props.name}</h1>
                 <p> {props.info}</p>
             </div>
        );
      }

export default BrandItems;
