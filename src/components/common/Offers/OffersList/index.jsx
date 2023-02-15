import React from "react";
import './style.css';


    function OfferList(props) {
        return (
            <>
            <div className="offer">
                <img src={props.img} alt="item"  />
                 <h1> {props.name}</h1>
                 <p> {props.info}</p>
             </div>
             </>
        );
      }

export default OfferList;