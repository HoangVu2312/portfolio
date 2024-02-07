import React from 'react'
import { Container } from 'react-bootstrap'
import "../style/NavBar.css"
import { Navbar, Nav} from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { motion, useMotionValue } from 'framer-motion';


function NavBar() {
  // const scrollY = useMotionValue(0);

  // useEffect(() => {
  //   const onScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     scrollY.set(scrollPosition);
  //   };

  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, [scrollY]);

  // const shouldAnimate = scrollY.get() > 0.5;

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Navbar
        expand="lg"
        className="navigation_bar"
        style={{ maxWidth: "80vw" }}
      >
        <div
          className="container nav-container d-flex justify-content-between"
          
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="toggle-btn position-relative"
          />{" "}
          {/*repesent the toggle button*/}
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="m-auto nav-content mt-2" >

              <div className="ms-3 home-link d-flex justify-content-center">
                <a href="/home">
                  <h5>Home</h5>
                </a>
              </div>
              <div className="ms-3 about-link  d-flex justify-content-center">
                <a href="/about">
                  <h5>About</h5>
                </a>
              </div>
              <div className="ms-3 projects-link  d-flex justify-content-center">
                <a href="/projects">
                  <h5>Projects</h5>
                </a>
              </div>
              <div className="ms-3 contact-link  d-flex justify-content-center">
                <a href="/contact">
                  <h5>Contact</h5>
                </a>
              </div>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Container>
  );
}

export default NavBar