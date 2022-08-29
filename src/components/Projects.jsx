import React from "react";
import "../assets/projects.css";

const Projects = () => {
  const projectsList = [
    {
      title: "joshkotrous.io",
      url: "https://joshkotrous.io",
      description:
        "My first developer portfolio. Built with React and Python, hosted on Amazon S3, powered by AWS Lambda, and deployed with GitHub actions.",
    },
  ];

  return (
    <div style={{ marginTop: "10%" }}>
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
  );
};

export default Projects;
