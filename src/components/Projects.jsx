import React from "react";
import PropTypes from "prop-types";
import "../assets/fonts.css";
import "../assets/section.css";
import "../assets/projects.css";

const Projects = (props) => {
  Projects.propTypes = {
    backgroundColor: PropTypes.string,
  };

  const projectsList = [
    {
      title: "joshkotrous.io",
      url: "https://joshkotrous.io",
      description:
        "My first developer portfolio. Built with React and Python, hosted on Amazon S3, powered by AWS Lambda, and deployed with GitHub actions.",
    },
  ];

  return (
    <div
      id="projects"
      className="sectionContainer"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h2>projects</h2>
      <div className="sectionContentContainer">
        {projectsList.map((item, index) => {
          return (
            <div key={index + "-project"} className="projectContainer">
              <div className="projectFrameContainer">
                <div style={{ transform: "scale(0.4)" }}>
                  <iframe
                    title={item.title}
                    scrolling="no"
                    className="projectFrame"
                    src={item.url}
                  />
                </div>
              </div>
              <div className="projectText">
                <a href={item.url}>{item.title}</a>
              </div>
              <div className="projectDescription">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
