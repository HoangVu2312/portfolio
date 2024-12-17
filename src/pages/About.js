import React, { useEffect, useRef, useState } from 'react'
import "../style/About.css"
import { Col, Container, Image, Row } from 'react-bootstrap'
import Left from "../images/hand.png"
import Right from "../images/hand2.png"
import Corner from "../images/about-border.png"
import Top from "../images/about-top-corner.png"
import Experience from '../components/Experience'
import { motion, useMotionValue } from 'framer-motion'
import NavBar from '../components/navBar'
import transition from '../components/transition'
import contactSound from '../soundtrack/about.mp3'; 



function About() {
  const scrollY = useMotionValue(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef(new Audio(contactSound));


  useEffect(() => {
    const playAudio = () => {
      // Play audio and handle errors
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    };

    const handleAudioEnd = () => {
      // Restart audio when it ends
      audioRef.current.currentTime = 0;
      playAudio();
    };

    // Set event listener for audio end
    audioRef.current.addEventListener("ended", handleAudioEnd);

    // Play audio when the component mounts
    playAudio();

    // Cleanup function to stop audio and remove event listener when the component unmounts
    return () => {
      audioRef.current.removeEventListener("ended", handleAudioEnd);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

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
    <div className="about-page">
      <Container>
        <div className="about-borders d-flex justify-content-center align-items-center">
          <Image src={Corner} alt="corner" className="corner corner-1" />
          <Image src={Corner} alt="corner" className="corner corner-2" />
          <Image src={Corner} alt="corner" className="corner corner-3" />
          <Image src={Corner} alt="corner" className="corner corner-4" />
          <Image src={Top} alt="top-border" className="top-border" />
        </div>

        {/* ------------------- */}

        <Row className="mt-5 pt-5 d-flex justify-content-center align-items-center">
          <Col lg={1}>
            <motion.img
              src={Left}
              alt="hand"
              className="hand left-hand"
              initial={{ x: "19rem", scale: 0.8 }}
              animate={{ x: "-20rem", scale: 1.3 }}
              transition={{
                duration: 2.5,
                type: "ease-in",
                delay: 1,
              }}
            />
          </Col>

          <Col lg={10}>
            <motion.div
              className="skills d-flex  justify-content-center align-items-center"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 2.5,
                type: "ease-in",
                delay: 1,
              }}
            >
              <div className="center-planet d-flex justify-content-center align-items-center py-3">
                <h3>skills</h3>
              </div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "13vw", y: "-9vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>HTML</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "20vw", y: "17vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>CSS</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "14vw", y: "-30vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>TailwindCSS</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-17vw", y: "17vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>javascript</h6>
              </motion.div>
              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-11vw", y: "-17vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>REACT</h6>
              </motion.div>
              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute py-3"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "20vw", y: "-20vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>typescript</h6>
              </motion.div>
              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-10vw", y: "1vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>NODEJS</h6>
              </motion.div>
              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "1vw", y: "22vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>GraphQL</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "1vw", y: "-28vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>SQL/NoSQL</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-25vw", y: "-2vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>JAVA</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "25vw", y: "2vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>NEXTJS</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "28vw", y: "-12vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>Azure/AWS</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "15vw", y: "26vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>CMS</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-30vw", y: "-19vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>consulting</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-30vw", y: "18vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>Headless</h6>
              </motion.div>

              <motion.div
                className="center-planet d-flex justify-content-center align-items-center position-absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: "-17vw", y: "-27vh" }}
                transition={{
                  duration: 0.5,
                  type: "ease-out",
                  delay: 2,
                }}
              >
                <h6>web-design</h6>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={1}>
            <motion.img
              src={Right}
              alt="hand"
              className="hand right-hand"
              initial={{ x: "-38rem", scale: 0.8 }}
              animate={{ x: "0vw", scale: 1.3 }}
              transition={{
                duration: 2.5,
                type: "ease-in",
                delay: 1,
              }}
            />
          </Col>
        </Row>

        {/* ------------------ */}

        <Experience/>
      </Container>
      <NavBar/>
    </div>
  );
}

export default transition(About);




