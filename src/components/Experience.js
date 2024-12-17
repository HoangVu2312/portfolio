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
              <h3>LAB University of Applied Sciences</h3>
              <span>2021-2024 | Lahti, Finland</span>
              <p>
                Choosing Information Technology was the right choice for me when
                i started university in Finland. I learned most of the basic and
                foundation in software development from my school and I got a
                chance to develop out my skills with many subjects.
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
              <h3>cybersoft Academy</h3>
              <span>2021-2023 | Coding BootCamp</span>
              <p>
                Aside from University, I also undertook an intense training
                course at Cybersoft Academy where I learned the advanced concept
                and got a profound understanding of this industry. Additionally,
                for the last 6 months, I have had some experience working with a
                two start-up companies as an exam to graduate from this
                Academy.
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
              <h3>Studifahrten</h3>
              <span>2023 | Cologne, Germany</span>
              <p>
                I got a chance to have an internship in Germany thanks to the
                Erasmus program at my University. During 4 months here, I have
                learn about a wide range of skills and knowledge related to
                UX/UI development. I have gained a valuable experience with
                various UX/UI designing tools and technologies used in the
                industry.
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
              <h3>Jutice4.0</h3>
              <span>2024 | Helsinki, Finland</span>
              <p>
                At the beginning of 2024, I had a chance to work as a front-end developer
                at Justice4.0, a start-up company based in Helsinki, Finland. Here is where 
                I learn to work with different people on building the Jutice Lady application. 
                My tasks were using React and Typescript to build dynamic user interfaces and
                solve different technical issues.  
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
              <h3>Kraftvaerk</h3>
              <span>Jul 2024-Now | Helsinki, Finland</span>
              <p>
                After graduation, I also had another opportunity at Kraftvaerk, a digital service company,
                where I learned to become a proficient developer. As a Frontend Developer, my main tasks involve implementing UI components 
                and interfaces using React and NextJS, integrating CMS platforms like Optimizely to modify and deliver dynamic content, and
                optimizing web performance.  I have also played a part in collaborating with the stakeholders, using cloud services like 
                Azure and AWS, to translate customer’s requirements into scalable and maintainable web applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
