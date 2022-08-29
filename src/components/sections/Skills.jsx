import React from "react";
import "../../assets/skills.css";

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

  const skillBarForeground = (percentage) => ({
    position: "absolute",
    width: `${percentage}%`,
    height: "5px",
    background:
      "linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF",
    borderRadius: "30px",
  });

  return (
    <div className="skillItemsContainer">
      <div className="skillHeadersContainer">
        {skillList.map((item, index) => {
          return (
            <div key={index + "-header"} className="skillItemHeader">
              <div>{item.header}</div>
            </div>
          );
        })}
      </div>
      <div className="skillBarsContainer">
        {skillList.map((item, index) => {
          return (
            <div key={index + "-skill"} className="skillBarContainer">
              <div className="skillBarBackground"></div>
              <div style={skillBarForeground(item.level)}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
