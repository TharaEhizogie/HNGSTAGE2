import React from 'react'
import vector from "../assets/Vector.svg";
import text from "../assets/Footer text.svg"
import i4g from "../assets/I4G.svg"

function Footer() {
  return (
    <div className='footer'>
        <div className='upper'><img className='zurilogo' src={vector} alt=""/></div>
       <img className='motto' src={text} alt="" />
        <img className='14glogo' src={i4g} alt="" />
    </div>
  )
}

export default Footer