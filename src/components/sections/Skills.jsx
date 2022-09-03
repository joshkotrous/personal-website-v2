import { React } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../assets/skills.css";

const Skills = () => {
  const skillList = [
    {
      header: "UiPath",
      level: "100%",
    },
    {
      header: "Workato",
      level: "100%",
    },
    {
      header: "React",
      level: "75%",
    },
    {
      header: "Python",
      level: "50%",
    },
    {
      header: "AWS",
      level: "25%",
    },
  ];
  const { ref, inView } = useInView();

  const skillBarForeground = (percentage) => ({
    position: "absolute",
    width: `${percentage}%`,
    height: "5px",
    background:
      "linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF",
    borderRadius: "30px",
  });

  return (
    <div className="skillItemsSectionContainer">
      <div ref={ref} className="skillItemsContainer">
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
                {inView ? (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.level }}
                    transition={{ duration: 0.75, delay: 0.25 }}
                    style={skillBarForeground(item.level)}
                  ></motion.div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
