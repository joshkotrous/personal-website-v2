import React from "react";
import "../assets/fonts.css";

const container = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  padding: "30px 10%",
  backgroundColor: "#4D4D4D",
};

const skillsHeader = {
  fontFamily: "Urbanist",
  color: "#DDADF7",
};

const skillItemsContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const skillHeaders = {
  height: "100%",
};

const skillHeader = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  height: "50px",
  width: "75%",
  marginRight: "24px",
  fontFamily: "Urbanist",
  color: "white",
  fontSize: "18px",
  fontWeight: "500",
};

const skillBars = {
  height: "100%",
  width: "63%",
};

const skillBarContainer = {
  position: "relative",
  height: "20%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
};

const skillBarBackround = {
  position: "absolute",
  width: "100%",
  height: "5px",
  borderRadius: "30px",
  background: "white",
};

const skillBarForeground = (percentage) => ({
  position: "absolute",
  width: `${percentage}%`,
  height: "5px",
  background:
    "linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF",
  borderRadius: "30px",
});

const Skills = () => {
  const skillList = [
    {
      header: "UiPath",
      level: "100",
    },
    {
      header: "Workato",
      level: "100",
    },
    {
      header: "React",
      level: "75",
    },
    {
      header: "Python",
      level: "50",
    },
    {
      header: "AWS",
      level: "25",
    },
  ];

  return (
    <div id="skills" style={container}>
      <h2 style={skillsHeader}>skills</h2>
      <div style={skillItemsContainer}>
        <div style={skillHeaders}>
          {skillList.map((item, index) => {
            return (
              <div key={index + "-header"} style={skillHeader}>
                {item.header}
              </div>
            );
          })}
        </div>
        <div style={skillBars}>
          {skillList.map((item, index) => {
            return (
              <div key={index + "-skill"} style={skillBarContainer}>
                <div style={skillBarBackround}></div>
                <div style={skillBarForeground(item.level)}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
