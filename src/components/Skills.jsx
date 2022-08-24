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
  // padding: '4px'
  display: "flex",
  // width: "50%",
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
  return (
    <div id="skills" style={container}>
      <h2 style={skillsHeader}>skills</h2>
      <div style={skillItemsContainer}>
        <div style={skillHeaders}>
          <div style={skillHeader}>UiPath</div>
          <div style={skillHeader}>Workato</div>
          <div style={skillHeader}>React</div>
          <div style={skillHeader}>Python</div>
          <div style={skillHeader}>AWS</div>
        </div>
        <div style={skillBars}>
          <div style={skillBarContainer}>
            <div style={skillBarBackround}></div>
            <div style={skillBarForeground(100)}></div>
          </div>
          <div style={skillBarContainer}>
            <div style={skillBarBackround}></div>
            <div style={skillBarForeground(100)}></div>
          </div>
          <div style={skillBarContainer}>
            <div style={skillBarBackround}></div>
            <div style={skillBarForeground(75)}></div>
          </div>
          <div style={skillBarContainer}>
            <div style={skillBarBackround}></div>
            <div style={skillBarForeground(50)}></div>
          </div>
          <div style={skillBarContainer}>
            <div style={skillBarBackround}></div>
            <div style={skillBarForeground(25)}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
