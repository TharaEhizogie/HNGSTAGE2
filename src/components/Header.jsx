import React from "react";
import arrow from "../assets/_Avatar share button.svg";
import threedots from "../assets/threedots.svg";
import image from "../assets/Web Focus.svg";

function Header() {
  return (
    <div className="Header">
      <div>
        <img className="arrow" src={arrow} alt="" />
        <img className="threedots" src={threedots} alt="" />
      </div>
      <div className="inner">
        <img className="picture"  src={image} alt="" />

        <h3 className='anne'>Annette Black</h3>
      </div>
      
    </div>
  );
}

export default Header;
