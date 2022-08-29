import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../assets/fonts.css";
import "../assets/section.css";

const About = (props) => {
  About.propTypes = {
    backgroundColor: PropTypes.string,
  };

  const { ref, inView } = useInView();
  const headerAnimation = useAnimation();
  const contentAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
      contentAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      });
    } else {
      headerAnimation.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      contentAnimation.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5 },
      });
    }
  }, [inView]);

  return (
    <div
      id="about"
      className="sectionContainer"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <motion.div ref={ref} animate={headerAnimation}>
        <h2>about me</h2>
      </motion.div>
      <motion.div animate={contentAnimation}>
        <p>
          <span style={{ fontWeight: "500" }}>My name is Josh Kotrous.</span>
          <br />
          <br />
          Currently working for Neostella as the Development Manager, I am a
          software developer focused on constantly learning new things and
          expanding my abilities. I am particularly experienced in implementing
          automations to complete complex business processes and leading
          high-performing software delivery teams.
          <br />
          <br />
          Most recently I&apos;ve been focused on honing my full-stack
          development skills using React and Python to build maintainable,
          scalable, and responsive web applications.
          <br />
          <br />
          If you&apos;d like to work with me or just chat, fill out the contact
          form at the bottom of the page.
          <br />
          <br />
          Thanks for visiting!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
