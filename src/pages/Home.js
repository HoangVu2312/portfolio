import React, { useEffect, useRef, useState } from 'react'
import "../style/Home.css"
import { Row, Col, Container, Image } from 'react-bootstrap'
import SunBorder from "../images/sun-border.png"
import TopBorder from "../images/sun-top-border.png"
import SunFrame from "../images/sun-frame.png"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import NavBar from '../components/navBar'
import transition from '../components/transition'
import contactSound from '../soundtrack/home.mp3'; 


function Home() {

  // sound
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

  const scrollingSpeed = 0.5; 

  const profileY = useTransform(scrollY, [0, 1], ["0%", "200%" ]);
  const nameY = useTransform(scrollY, [0, -1], ["0%", `${380 * scrollingSpeed}%`]);
  // const nameX = useTransform(scrollY, [0, 1], ["0%", `${370 * scrollingSpeed}%`]);

  // const addClassNameToBioFont = () => {
  //   // Change the condition as needed based on your scroll position
  //   return scrollY.get() === 1 ? 'bio-font-scrolled' : '';
  // };
  const nameX = useTransform(scrollY, [0, 1], ["0%", `${370 * scrollingSpeed}%`]);

  return (
    <div className="home-page">
      <Container className="d-flex justify-content-center align-items-center flex-column" style={{maxWidth:"80%", minHeight:"180vh"}}>
        <div className="borders">
          <Image
            className="corner-border border-1"
            src={SunBorder}
            alt="border"
          />
          <Image
            className="corner-border border-2"
            src={SunBorder}
            alt="border"
          />
          <Image
            className="corner-border border-3"
            src={SunBorder}
            alt="border"
          />
          <Image
            className="corner-border border-4"
            src={SunBorder}
            alt="border"
          />
          <Image className="top-border" src={TopBorder} alt="border" />
        </div>

        <Row className="d-flex justify-content-center align-items-center flex-column">
          <Col md={12}>
            <motion.div className="rotate-profile d-flex flex-column justify-content-center align-items-center" style={{y:profileY, zIndex: 1}}>
              <div className="frame-container">
                <Image
                  className="profile-frame mt-5"
                  src={SunFrame}
                  alt="border"
                />
              </div>

              <div className="profile-card ">
                <div className="card-container">
                  <div className="profile-back"></div>
                  <div className="profile-font"></div>
                </div>
              </div>
            </motion.div>
          </Col>

          {/*  */}
          <Col md={12} className="title text-center mt-5" style={{zIndex:"100"}}>
            <motion.div  style={{x:nameX, y:nameY, zIndex: 100}}>
            <h1
           
            >
              Hoang Vu
            </h1>

            <h5>Full-stack Developer</h5>
            </motion.div>
            
          </Col>
        </Row>

        <div className="bio-section">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={4}>
              <div className="bio-card d-flex justify-content-center align-items-center">
                <div className="bio-card-container d-flex justify-content-center align-items-center">
                  <div className="bio-back"></div>
                  <div className={`bio-font ${isScrolled ? 'bio-font-scrolled' : ''}`}></div>
                </div>
              </div>
            </Col>
            <Col lg={4} ></Col>

            <Col lg={4} className='d-flex flex-column justify-content-center align-items-center'>
              <div className='numbers d-flex flex-column align-items-end'>

                <div className={`number mt-2 ${isScrolled ? 'number-scrolled' : ''}`}>
                  <h1>20+</h1>
                  <h3>Projects</h3>
                </div>

                <div className={`number my-5 ${isScrolled ? 'number-scrolled' : ''}`}>
                  <h1>10+</h1>
                  <h3>Clients</h3>
                </div>

                <div className={`number mt-2 ${isScrolled ? 'number-scrolled' : ''}`}>
                  <h1>3+</h1>
                  <h3>Years of experience</h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        
      </Container>
      {/* navigation */}
      <NavBar/>
    </div>
  );
}

export default transition(Home);