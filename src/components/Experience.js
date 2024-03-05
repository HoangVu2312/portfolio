import React, { useRef } from "react";
import "../style/Experience.css";
import { motion, useScroll } from "framer-motion";
import CircleIcon from "./CircleIcon";

const Experience = () => {
  const ref = useRef(null);
  const Iref = useRef(null);
  const Iref2 = useRef(null);
  const Iref3 = useRef(null);
  const Iref4 = useRef(null);
  const Iref5 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="education my-5">
      <h2 className="text-center">Experience</h2>

      <div
        ref={ref}
        className="mx-auto position-relative"
        style={{ width: "75%" }}
      >
        {/* expanding div */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="scroll-bar position-absolute "
        />

        <ul className="d-flex flex-column justify-content-between mx-4 pb-3">
          <li
            ref={Iref}
            className="d-flex flex-column justify-content-center align-items-start position-relative"
          >
            {/* icon */}
            <CircleIcon reference={Iref} />

            <div>
              <h3>University of Technology and Education</h3>
              <span>2017-2019 | HCM city, VietNam</span>
              <p>
                I stared my higher education in VietNam with the major
                Autiomation Technology. I learned mostly about car-automation
                and the logic behind it.
              </p>
            </div>
          </li>
          <li
            ref={Iref2}
            className="d-flex flex-column justify-content-center align-items-start position-relative"
          >
            {/* icon */}
            <CircleIcon reference={Iref2} />

            <div>
              <h3>LAB University of Applied Sciences</h3>
              <span>2020-now | Lahti, Finland</span>
              <p>
                Choosing Information Technology was the right choice for me when
                i started university in Finland. I learned most of the basic and
                foundation in software development from my school and I got a
                chance to test out my skills with many subjects.
              </p>
            </div>
          </li>
          <li
            ref={Iref3}
            className="d-flex flex-column justify-content-center align-items-start position-relative"
          >
            {/* icon */}
            <CircleIcon reference={Iref3} />

            <div>
              <h3>cybersoft Academy</h3>
              <span>2021-2023 | HCM city, VietNam</span>
              <p>
                Aside from University, I also undertook an intense traning
                course at Cybersoft Academy where I learned the advance concept
                and got a profound understanding of this industry. Additionally,
                for the last 6 months, I had some experience working with a
                couple of start-up companies as an exam to graduate from this
                Academy
              </p>
            </div>
          </li>

          <li
            ref={Iref4}
            className="d-flex flex-column justify-content-center align-items-start position-relative"
          >
            {/* icon */}
            <CircleIcon reference={Iref4} />

            <div>
              <h3>Teaching Assistant at Cybersoft Academy</h3>
              <span>2023 | Online, VietNam</span>
              <p>
                After graduation, I decided to stay to support my teacher as an
                Assistant. My job was mostly to answer questions from students
                and helped them understand about the lessons better.
              </p>
            </div>
          </li>

          <li
            ref={Iref5}
            className="d-flex flex-column justify-content-center align-items-start position-relative"
          >
            {/* icon */}
            <CircleIcon reference={Iref5} />

            <div>
              <h3>Studifahrten Gmbh-Internship</h3>
              <span>2023| Cologne, Germany</span>
              <p>
                I got a chance to have an internship in Germany thanks the
                Eramus program at my University. During 4 months here, I have
                learn about a wide range of skills and knowledge related to
                UX/UI development. I have gained a valuable experience with
                various UX/UI designing tools and technologies used in the
                industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
