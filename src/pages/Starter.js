import React from 'react'
import Cat from "../images/cat.gif";
import "../style/Loader.css" 
import { motion } from 'framer-motion';


function Starter() {
  return (
    <div className='loader-page d-flex justify-content-center align-items-center flex-column'>
        <img src={Cat} alt='cat'/>
        <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          type: "ease-in",
          delay: 0.1,
        }}
        className='get-started-button'>
            <a href="home">Get Started</a>
        </motion.button>
    </div>
  )
}

export default Starter