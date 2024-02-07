import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../style/Contact.css";
import { motion, useMotionValue } from 'framer-motion';
import NavBar from '../components/navBar';
import transition from '../components/transition';
import contactSound from '../soundtrack/contact.mp3'; 

function Contact() {

  // audio
    const eyeRef = useRef();
    const audioRef = useRef(new Audio(contactSound));


    useEffect(() => {
      const playAudio = () => {
        // Play audio and handle errors
        audioRef.current.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      };
  
      const handleAudioEnd = () => {
        // Restart audio when it ends
        audioRef.current.currentTime = 0;
        playAudio();
      };
  
      // Set event listener for audio end
      audioRef.current.addEventListener('ended', handleAudioEnd);
  
      // Play audio when the component mounts
      playAudio();
  
      // Cleanup function to stop audio and remove event listener when the component unmounts
      return () => {
        audioRef.current.removeEventListener('ended', handleAudioEnd);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      };
    }, []);

    // eye follow
    useEffect(() => {
        const eye = eyeRef.current;

        const handleMouseMove = (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 30;
            const y = -(window.innerHeight / 2 - event.pageY) / 30;

            
            eye.style.transform = `rotate(-25deg) translateY(${y}px) translateX(${x}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 


      // scroll section
  const scrollY = useMotionValue(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      scrollY.set(scrollPosition);

      setIsScrolled(scrollPosition === 1);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollY]);


  useEffect(() => {
    const onScrollToBottom = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        scrollY.set(1);
      }
    };

    window.addEventListener('scroll', onScrollToBottom);

    return () => {
      window.removeEventListener('scroll', onScrollToBottom);
    };
  }, [scrollY]);

    return (
      <div className="contact-section">
        <Container
          className=" d-flex justify-content-center align-items-between flex-column position-relative mb-5"
          style={{ minHeight: "110vh", top: "0", left: "0" }}
        >
          <Row>
            <Col md={2}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  type: "ease-in",
                  delay: 0.5,
                }}
                className="resume"
              >
                <div className="resume-btn">            
                  <a href='Hoangvu.pdf' download="HoangVu.pdf"><h2>Resume</h2></a>
                </div>
               
              </motion.div>
            </Col>
            <Col
              md={8}
              className=" pyramid-container d-flex justify-content-center align-items-center flex-column position-relative"
            >
              <motion.div
                initial={{ y: "-100rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 5,
                  type: "ease-in",
                  delay: 2,
                }}
                className="pyramid"
              >
                <div className="triangle">
                  <div className="eye-container">
                    <div className="eye" ref={eyeRef}></div>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col md={2}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  type: "ease-in",
                  delay: 0.5,
                }}
                className="contact"
              >
                <div className="contact-btn">
                <a href='mailto:vhoang2399@gmail.com'><h2>Contact</h2></a>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Icons */}
          <div className="icons  d-flex justify-content-center align-items-center">
            <div className="linkedin">
              <a href='https://www.linkedin.com/in/huy-hoang-vu-94a49b275/' target="_blank"><i className="fab fa-linkedin fa-3x mx-2"></i></a>
            </div>
            <div className="github">
              <a href='https://github.com/HoangVu2312' target="_blank" ><i className="fab fa-github fa-3x  mx-4"></i></a>
            </div>
            <div className="instagram">
              <a href='https://www.instagram.com/beastdunk' target="_blank"><i className="fab fa-instagram fa-3x  mx-2"></i></a>
            </div>
          </div>
        </Container>

        <NavBar />
      </div>
    );
}

export default transition(Contact);

