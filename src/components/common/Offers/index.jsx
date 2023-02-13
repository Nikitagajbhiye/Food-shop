import React from "react";
import './style.css';
import { offerData } from "./offerdata";
import OfferList from "./OffersList";


    function Offers() {
      return (
        <div className="list" >
         {offerData.map((offer)=>{
           return (
           <OfferList img={offer.img} name={offer.name} info={offer.info} />
         );})}
        </div>
      );
    }

export default Offers;