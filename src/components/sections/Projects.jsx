import { React } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../assets/projects.css";

const Projects = () => {
  const projectsList = [
    {
      title: "joshkotrous.io",
      url: "https://joshkotrous.io",
      description:
        "My first developer portfolio. Built with React and Python, hosted on Amazon S3, powered by AWS Lambda, and deployed with GitHub actions.",
      delay: 0.25,
    },
  ];
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="projectsContainer">
      {inView
        ? projectsList.map((item, index) => {
            return (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: item.delay }}
                key={index + "-project"}
                className="projectContainer"
              >
                <div className="projectFrameContainer">
                  <iframe
                    title={item.title}
                    scrolling="no"
                    className="projectFrame"
                    src={item.url}
                  />
                </div>
                <div>
                  <div className="projectText">
                    <a href={item.url}>{item.title}</a>
                  </div>
                  <div className="projectDescription">{item.description}</div>
                </div>
              </motion.div>
            );
          })
        : null}
    </div>
  );
};

export default Projects;
