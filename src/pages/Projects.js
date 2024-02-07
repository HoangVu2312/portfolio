
import "../style/Projects.css"
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useMotionValue } from 'framer-motion';

import CardImage0 from "../images/preview1.png";
import CardImage1 from "../images/project-1.png";
import CardImage2 from "../images/project-2.png";
import CardImage3 from "../images/project-3.png";
import CardImage4 from "../images/project-4.png";
import CardImage5 from "../images/project-5.png";
import CardImage6 from "../images/project-3.png";
import NavBar from "../components/navBar";
import transition from "../components/transition";
import contactSound from '../soundtrack/project.mp3'; 



function Projects() {

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

  const cardImages = [CardImage0, CardImage1, CardImage2, CardImage3, CardImage4, CardImage5, CardImage6];
  const projectLinks = [
    "projects",
    "https://honagvu-real-estate-utopia.onrender.com",
    "https://ecommerce-gsv7.onrender.com",
    "https://magoon.onrender.com",
    "https://mini-project-ten-sigma.vercel.app",
    "https://wolt-mini-project.vercel.app"
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const [enableHover, setEnableHover] = useState(false);
  const [enableDisplay, setEnableDisplay] = useState(false);
  
  const handleCardClick = (index) => {
    setCurrentImageIndex(index);
    setCurrentLinkIndex(index);
    setEnableDisplay(true)
  };

  const projectPreviewStyle = {
    backgroundImage: `url(${currentImageIndex !== -1 ? cardImages[currentImageIndex] : ''})`,
  };


  const [isHovering, setIsHovering] = useState(true);

  const [cardPositions, setCardPositions] = useState([
    { top: "30%", left: "50%"},
    { top: "29%", left: "49%" },
    { top: "28%", left: "48%" },
    { top: "27%", left: "47%" },
    { top: "26%", left: "46%"},
    { top: "25%", left: "45%" },
  ]);

  const handleAnimateCards = () => {

    setIsHovering(false);
    // Define the target positions for each card
    const targetPositions = [
      { top: "5%", left: 0 },
      { top: "5%", left: "42%"},
      { top: "5%", left: "85%"},
      { top: "53%", left: 0 },
      { top: "53%", left: "42%" },
      { top: "53%", left: "85%"},
    ];
  
    // Set the new positions for the cards
    setCardPositions(targetPositions);

    setEnableHover(true);
  };


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

  // Rest of your component...

  // At the end of your About component, set scrollY to 1 when the user scrolls to the bottom
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
    <div className="project-page">
      <Container className="mb-5" style={{minHeight:"120vh"}}>
        <Row>
          <Col lg={6}>
            <div className="ball-container">
              <div className="magic-ball"></div>
              <div
                className="project-preview"
                style={projectPreviewStyle}
              ></div>

              <div className={`open-link  ${enableDisplay ? "alow-display" : ""}`}>
                <div className="link-container">
                  <a
                    href={projectLinks[currentLinkIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* --------------------- */}
          <Col
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center position-relative"
          >
            <div
              className={`project-cards position-relative ${
                isHovering ? "hover-cards" : ""
              }`}
              onClick={handleAnimateCards}
            >
              <motion.div
                className={`wholeCard ${enableHover ? "rotate-3d" : ""}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: cardPositions[0].top,
                  left: cardPositions[0].left,
                  transition: "top 1s ease-in, left 1s ease-in",
                }}
              >
                <div className="projectCard-container">
                  <div
                    className="projectCard-back project-card card-1"
                    onClick={() => handleCardClick(1)}
                  ></div>

                  <div className="projectCard-font"></div>
                </div>
              </motion.div>

              <motion.div
                className={`wholeCard ${enableHover ? "rotate-3d" : ""}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: cardPositions[1].top,
                  left: cardPositions[1].left,
                  transition: "top 1s ease-in, left 1s ease-in",
                }}
              >
                <div className="projectCard-container">
                  <div
                    className="projectCard-back project-card card-2"
                    onClick={() => handleCardClick(2)}
                  ></div>

                  <div className="projectCard-font"></div>
                </div>
              </motion.div>

              <motion.div
                className={`wholeCard ${enableHover ? "rotate-3d" : ""}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: cardPositions[2].top,
                  left: cardPositions[2].left,
                  transition: "top 1s ease-in, left 1s ease-in",
                }}
              >
                <div className="projectCard-container">
                  <div
                    className="projectCard-back project-card card-3"
                    onClick={() => handleCardClick(3)}
                  ></div>

                  <div className="projectCard-font"></div>
                </div>
              </motion.div>

              <motion.div
                className={`wholeCard ${enableHover ? "rotate-3d" : ""}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: cardPositions[3].top,
                  left: cardPositions[3].left,
                  transition: "top 1s ease-in, left 1s ease-in",
                }}
              >
                <div className="projectCard-container">
                  <div
                    className="projectCard-back project-card card-4"
                    onClick={() => handleCardClick(4)}
                  ></div>

                  <div className="projectCard-font"></div>
                </div>
              </motion.div>

              <motion.div
                className={`wholeCard ${enableHover ? "rotate-3d" : ""}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: cardPositions[4].top,
                  left: cardPositions[4].left,
                  transition: "top 1s ease-in, left 1s ease-in",
                }}
              >
                <div className="projectCard-container">
                  <div
                    className="projectCard-back project-card card-5"
                    onClick={() => handleCardClick(5)}
                  ></div>

                  <div className="projectCard-font"></div>
                </div>
              </motion.div>

              <motion.div
                className={`wholeCard ${enableHover ? "rotate-3d" : ""}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: cardPositions[5].top,
                  left: cardPositions[5].left,
                  transition: "top 1s ease-in, left 1s ease-in",
                }}
              >
                <div className="projectCard-container">
                  <div
                    className="projectCard-back project-card card-6"
                    onClick={() => handleCardClick(6)}
                  ></div>

                  <div className="projectCard-font"></div>
                </div>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
      <NavBar/>
    </div>
  );
}

export default transition(Projects);
