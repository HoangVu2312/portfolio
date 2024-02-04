import React from 'react'
import Cat from "../images/cat.gif";
import "../style/Loader.css" 


const Loader = () => {
  return (
    <div className='loader-page d-flex justify-content-center align-items-center'>
        <img src={Cat} alt='cat'/>
    </div>
  )
}

export default Loader