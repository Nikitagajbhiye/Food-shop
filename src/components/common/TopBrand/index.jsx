import React from "react";
import './style.css';
import BrandItems from "./BrandItems";
import { BrandData } from "./branddata";

    function TopBrand() {
      return (
        <div className="brand-list" >
         {BrandData.map((brand)=>{
           return (
           <BrandItems img={brand.img} name={brand.name} time={brand.time} />
         );})}
        </div>
      );
    }

export default TopBrand;