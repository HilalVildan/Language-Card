import React from 'react';
import icon from "../../assets/react (1).svg";
import "./Icon.css"

const Icon = () => {
  return (
    <div className='icon container text-center'>
        <img className=' mt-4 mb-4' src={icon} alt="" />
    </div>
  )
}

export default Icon