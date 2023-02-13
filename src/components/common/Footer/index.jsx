import React from "react";
import Logo from '../Logo';
import './style.css';

const Footer = () => {
    return (
      <>
      <footer>
        <div className="footer">
        <p>
          We're a team of Professional cooks who are excited about their food,
          amazing skills and expertiness in cooking.
        </p>
       			
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-twitter"></i>
      </div>

      <div className="contact">
       			<h3>Contact Info</h3>
       			<i class="fa fa-phone"></i>+91 1112223333 <br></br>
       			<i class="fa fa-envelope"></i>tastemaker@gmail.com <br></br>
       		  <i class="fa fa-map-marker"></i>Mumbai ,India-410200.
      </div>
  
        <Logo />
      </footer>
      </>
    );
  };

export default Footer;