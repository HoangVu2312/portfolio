import { motion, useScroll } from 'framer-motion'
import React from 'react'


const CircleIcon = ({reference}) => {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["start end", "center center"]
        }
    );

  return (
    <figure className='position-absolute' style={{top:"50px", left:"-110px"}}>
        <svg width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" stroke="none" strokeWidth="1" fill="none" />
            <motion.circle cx="75" cy="50" r="20" stroke="#aa771c" strokeWidth="5px" fill="none"
                  style={{
                    pathLength: scrollYProgress
                  }}
                  />
            <circle cx="75" cy="50" r="10" stroke="green" strokeWidth="1" fill="#790202" />
        </svg>
    </figure>
  )
}

export default CircleIcon