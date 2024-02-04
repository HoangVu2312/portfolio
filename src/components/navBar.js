import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import "../style/NavBar.css"
import { motion, useMotionValue } from 'framer-motion';


function NavBar() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      scrollY.set(scrollPosition);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollY]);

  const shouldAnimate = scrollY.get() > 1;

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <motion.div
      className="nav-container d-flex justify-content-between"
      initial={{ y: shouldAnimate ? '20rem' : '-5rem', opacity: shouldAnimate ? 0 : 1 }}
      animate={{ y: shouldAnimate ? '-2.5rem' : '20rem', opacity: shouldAnimate ? 1 : 0 }}
      transition={{
        duration: 2,
        type: 'ease-in',
      }}
    >
        <div>
          <li>
            <h5>
              <a href="home">Home</a>
            </h5>
          </li>
        </div>

        <div>
          <li>
            <h5>
              <a href="about">About</a>
            </h5>
          </li>
        </div>

        <div>
          <li>
            <h5>
              <a href="projects">Projects</a>
            </h5>
          </li>
        </div>

        <div>
          <li>
            <h5>
              <a href="contact">Contact</a>
            </h5>
          </li>
        </div>
      </motion.div>
    </Container>
  );
}

export default NavBar