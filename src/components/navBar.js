import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import "../style/NavBar.css"
import { Navbar, Nav, Button, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
     
      
      <Navbar expand="lg" className="navigation_bar" style={{maxWidth:"80vw"}}>
        <motion.div
        className="container nav-container d-flex justify-content-between"
        initial={{ y: shouldAnimate ? '20rem' : '-5rem', opacity: shouldAnimate ? 0 : 1 }}
        animate={{ y: shouldAnimate ? '-2.5rem' : '20rem', opacity: shouldAnimate ? 1 : 0 }}
        transition={{
          duration: 2,
          type: 'ease-in',
        }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className='toggle-btn position-relative'/>{" "}
          {/*repesent the toggle button*/}

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto nav-content">
              <LinkContainer to="/home">
                <Nav.Link className="ms-3 home-link">
                  <h5>Home</h5>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link className="ms-3 about-link">
                  <h5>About</h5>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects">
                <Nav.Link className="ms-3 projects-link">
                  <h5>projects</h5>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="ms-3 contact-link">
                  <h5>Contact</h5>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </motion.div>
      </Navbar>
    </Container>
  );
}

export default NavBar