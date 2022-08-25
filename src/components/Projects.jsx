import React from "react";
import "../assets/fonts.css";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  padding: "30px 10%",
};

const projectsContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  marginTop: "10vh",
};

const projectsHeader = {
  fontFamily: "Urbanist",
  color: "#DDADF7",
};

const project = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "250px",
  width: "250px",
  margin: "16px",
  marginBottom: "12vh",
};

const projectFrameContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "200px",
  padding: "16px",
  background:
    "linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF",
};

const projectFrame = {
  border: "none",
  width: "540px",
  height: "540px",
  pointerEvents: "none",
};

const projectLink = {
  color: "white",
  textDecoration: "none",
  fontFamily: "Urbanist",
  fontSize: "24px",
  fontWeight: "500",
};

const projectText = { width: "91%", textAlign: "left", marginTop: "8px" };

const projectDescription = {
  width: "91%",
  textAlign: "left",
  marginTop: "8px",
  color: "white",
  fontWeight: "300",
  fontSize: "16px",
};

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
    <div id="projects" style={container}>
      <h2 style={projectsHeader}>projects</h2>
      <div style={projectsContainer}>
        {projectsList.map((item, index) => {
          return (
            <div key={index + "-project"} style={project}>
              <div style={projectFrameContainer}>
                <div style={{ transform: "scale(0.4)" }}>
                  <iframe
                    title={item.title}
                    scrolling="no"
                    style={projectFrame}
                    src={item.url}
                  />
                </div>
              </div>
              <div style={projectText}>
                <a style={projectLink} href={item.url}>
                  {item.title}
                </a>
              </div>
              <div style={projectDescription}>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
